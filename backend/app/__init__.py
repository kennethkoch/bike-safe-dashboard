from flask import Flask
app = Flask(__name__)
from app import routes,function_test

app.run(debug=True)