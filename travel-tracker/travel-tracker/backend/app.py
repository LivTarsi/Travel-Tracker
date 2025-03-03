from routes.user import user_bp

app.register_blueprint(user_bp, url_prefix='/api')

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing
app.config["JWT_SECRET_KEY"] = "your_secret_key"  # Change this to a strong key
app.config["MONGO_URI"] = "mongodb://localhost:27017/travel_tracker"
mongo = PyMongo(app)
jwt = JWTManager(app)

# Basic route
@app.route('/')
def home():
    return "Welcome to Travel Tracker API!"

if __name__ == '__main__':
    app.run(debug=True)

