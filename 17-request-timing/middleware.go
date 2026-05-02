// middleware.go — Drop-in net/http middleware using the Analyzer
// Usage: wrap any http.Handler with TimingMiddleware

package timing

import (
	"net"
	"net/http"
)

// TimingMiddleware blocks requests from IPs with bot-like timing patterns
func TimingMiddleware(analyzer *Analyzer, next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ip := realIP(r)

		isBot := analyzer.Record(ip)
		if isBot {
			http.Error(w, "Access denied", http.StatusForbidden)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// realIP extracts the client IP, respecting X-Forwarded-For (behind proxies/Cloudflare)
func realIP(r *http.Request) string {
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		// Take the first IP in the chain
		if ip, _, err := net.SplitHostPort(xff); err == nil {
			return ip
		}
		return xff
	}
	ip, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return ip
}

// Example usage
//
// package main
//
// import (
// 	"fmt"
// 	"net/http"
// 	"github.com/cubexteam/scraping-shield/17-request-timing/timing"
// )
//
// func main() {
// 	analyzer := timing.New()
//
// 	mux := http.NewServeMux()
// 	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
// 		fmt.Fprintln(w, "Hello, human!")
// 	})
//
// 	protected := timing.TimingMiddleware(analyzer, mux)
// 	http.ListenAndServe(":8080", protected)
// }
