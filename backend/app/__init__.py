from flask import Flask

app = Flask(__name__)
from app import routes, data

app.run(debug=True)
