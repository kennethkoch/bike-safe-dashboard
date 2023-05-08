from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
from . import routes

# def create_app():
#     app = Flask(__name__)
#     app.register_blueprint(routes.bp)
#     return app


if __name__ == "__main__":
    app.run()
