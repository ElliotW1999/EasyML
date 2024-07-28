from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/')
def home():
    return "test"

if __name__ == '__main__':
    app.run(debug=True, port=5002)
