from flask import Flask, jsonify
from data import data

app = Flask(__name__)

print("hello from flask")


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/data")
def get_data():
    # test_data = {"name": "John", "age": 30, "city": "New York"}
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
