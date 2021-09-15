import json
from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
# mount static directory to easily pull static files with src="static/scripts/main.js" style syntax in html
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def root():
    return FileResponse("./static/html/tips.html")

@app.get("/random", response_class=HTMLResponse)
async def random():
    return FileResponse("./static/html/randomtips.html")