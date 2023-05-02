from flask import Flask

app = Flask(__name__)

from . import routes

# def create_app():
#     app = Flask(__name__)
#     app.register_blueprint(routes.bp)
#     return app


if __name__ == "__main__":
    app.run()
