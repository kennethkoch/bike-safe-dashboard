from urllib import response
from app import app, function_test


data = function_test.data


@app.route("/api")
def my_profile():
    response_body = data
    return response_body
