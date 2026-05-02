# Rate limiting for Python / FastAPI
# pip install slowapi

from fastapi import FastAPI, Request
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from fastapi.responses import JSONResponse

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter

@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(status_code=429, content={"error": "Rate limit exceeded"})

@app.get("/products")
@limiter.limit("10/minute")
async def get_products(request: Request):
    return {"products": []}

@app.get("/api/prices")
@limiter.limit("5/minute")
async def get_prices(request: Request):
    return {"prices": []}
