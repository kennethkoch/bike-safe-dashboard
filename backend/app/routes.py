from urllib import response
from app import app, data


data = data.data


@app.route("/api")
def my_profile():
    response_body = data
    return response_body
