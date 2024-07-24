from flask import Flask, render_template, request, redirect, url_for, flash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.secret_key = "mysecretkey"

@app.route("/")
def home():
    return "<h1>HELLO, WORLD</h1>"

@app.route("/about")
def about():
    return "<h1>ABOUT</h1>"

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    print(data)
    return {'success': True}

if __name__ == "__main__":
    app.run(debug=True, port=8080)