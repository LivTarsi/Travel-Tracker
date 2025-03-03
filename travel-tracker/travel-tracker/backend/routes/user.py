from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash

mongo = PyMongo()

user_bp = Blueprint('user', __name__)

# Signup route
@user_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    hashed_password = generate_password_hash(password)

    # Check if user already exists
    if mongo.db.users.find_one({"email": email}):
        return jsonify({"message": "User already exists"}), 400

    # Create user in database
    mongo.db.users.insert_one({"email": email, "password": hashed_password})
    return jsonify({"message": "User created successfully!"}), 201

# Login route
@user_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = mongo.db.users.find_one({"email": email})
    if not user or not check_password_hash(user['password'], password):
        return jsonify({"message": "Invalid credentials"}), 401

    # Create JWT token
    access_token = create_access_token(identity=email)
    return jsonify({"access_token": access_token}), 200

