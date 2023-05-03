from flask import Flask, jsonify
from . import app
from flask import Blueprint

# bp = Blueprint("my_routes", __name__)
# from data import get_data
from . import data

# get_data()
data.get_data()


# newdata = get_data()
# app = Flask(__name__)

print("hello from flask")


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/test")
def test():
    return "<p>test</p>"


@app.route("/data")
def return_data():
    data.get_data()
    # test_data = {"name": "John", "age": 30, "city": "New York"}
    return data.data_object


# if __name__ == "__main__":
#     app.run(debug=True, port=5000)
