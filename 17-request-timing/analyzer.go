// analyzer.go — Request timing analyzer
// Pure Go, no external dependencies
// go version: 1.21+

package timing

import (
	"math"
	"sync"
	"time"
)

const (
	// Minimum requests before analysis kicks in
	MinSamples = 5
	// Maximum timestamps to keep per IP
	MaxSamples = 20
	// If stddev of intervals is below this (ms), treat as bot
	BotThresholdMs = 50.0
	// How long to keep IP state without new requests
	TTL = 10 * time.Minute
)

// IPState holds request history for one IP
type IPState struct {
	Timestamps []time.Time
	LastSeen   time.Time
	Blocked    bool
}

// Analyzer tracks request timing per IP
type Analyzer struct {
	mu     sync.Mutex
	states map[string]*IPState
}

// New creates a new Analyzer and starts background cleanup
func New() *Analyzer {
	a := &Analyzer{
		states: make(map[string]*IPState),
	}
	go a.cleanup()
	return a
}

// Record adds a timestamp for the given IP and returns whether it looks like a bot
func (a *Analyzer) Record(ip string) (isBot bool) {
	a.mu.Lock()
	defer a.mu.Unlock()

	state, ok := a.states[ip]
	if !ok {
		state = &IPState{}
		a.states[ip] = state
	}

	now := time.Now()
	state.LastSeen = now
	state.Timestamps = append(state.Timestamps, now)

	// Keep only the last MaxSamples timestamps
	if len(state.Timestamps) > MaxSamples {
		state.Timestamps = state.Timestamps[len(state.Timestamps)-MaxSamples:]
	}

	// Need at least MinSamples to make a decision
	if len(state.Timestamps) < MinSamples {
		return false
	}

	stddev := intervalStdDev(state.Timestamps)
	state.Blocked = stddev < BotThresholdMs
	return state.Blocked
}

// IsBlocked returns true if the IP is currently flagged as a bot
func (a *Analyzer) IsBlocked(ip string) bool {
	a.mu.Lock()
	defer a.mu.Unlock()
	if s, ok := a.states[ip]; ok {
		return s.Blocked
	}
	return false
}

// intervalStdDev calculates standard deviation of intervals between timestamps (in ms)
func intervalStdDev(ts []time.Time) float64 {
	if len(ts) < 2 {
		return math.MaxFloat64
	}

	intervals := make([]float64, len(ts)-1)
	for i := 1; i < len(ts); i++ {
		intervals[i-1] = float64(ts[i].Sub(ts[i-1]).Milliseconds())
	}

	// Mean
	var sum float64
	for _, v := range intervals {
		sum += v
	}
	mean := sum / float64(len(intervals))

	// Variance
	var variance float64
	for _, v := range intervals {
		diff := v - mean
		variance += diff * diff
	}
	variance /= float64(len(intervals))

	return math.Sqrt(variance)
}

// cleanup removes stale IP entries every minute
func (a *Analyzer) cleanup() {
	ticker := time.NewTicker(time.Minute)
	for range ticker.C {
		a.mu.Lock()
		for ip, state := range a.states {
			if time.Since(state.LastSeen) > TTL {
				delete(a.states, ip)
			}
		}
		a.mu.Unlock()
	}
}
