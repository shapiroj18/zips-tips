# Zips Tips

Basic FastAPI App that shows [Zips Tips](https://www.brown.edu/Athletics/Mens_Ultimate/ztips.html) - a collection of Ultimate Frisbee tips written by Josh Ziperstein.

### Deployment
Deployed using [Deta](https://www.deta.sh/) at `https://t2xjpk.deta.dev/`. There are two endpoints:
1. `https://t2xjpk.deta.dev/` shows all tips
2. `https://t2xjpk.deta.dev/random` shows a random tip

Deployment is updated with `deta deploy` when at the top of the repo.

### Runing on your machine locally
1. `git clone https://github.com/shapiroj18/zips-tips.git`
2. `cd zips-tips`
3. `python3 -m venv venv`
4. `source venv/bin/activate`
5. `pip install -r requirements.txt`
6. `uvicorn main:app --reload`

The server will now be running on `http://127.0.0.1:8000`.

### Notes
Data retrieved from repo found [here](https://github.com/llimllib/zipstips)