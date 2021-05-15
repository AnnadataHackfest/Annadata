import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

classes = ['apple', 'banana', 'blackgram', 'chickpea', 'coconut', 'coffee',
       'cotton', 'grapes', 'jute', 'kidneybeans', 'lentil', 'maize',
       'mango', 'mothbeans', 'mungbean', 'muskmelon', 'orange', 'papaya',
       'pigeonpeas', 'pomegranate', 'rice', 'watermelon']

clf = pickle.load(open('recommender.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        features = [request.json.get('n'), request.json.get('p'), request.json.get('k'), request.json.get('temp'), request.json.get('hum'), request.json.get('ph'), request.json.get('rain')]
        for i in range(len(features)):
             features[i] = float(features[i])
        print(features)
        pred = clf.predict([features])

    return jsonify({'crop' : classes[pred[0]]})

if __name__ == "__main__":
    app.run(port = 9000)