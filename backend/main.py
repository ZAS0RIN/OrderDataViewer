from fastapi import FastAPI

from routers import order_route

app = FastAPI()

app.include_router(order_route.router, prefix="/api", tags=["orders"])

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
