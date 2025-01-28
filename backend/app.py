from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/currency-convert', methods=['POST'])
def currency_convert():
    data = request.json
    amount = data['amount']
    from_currency = data['from']
    to_currency = data['to']

    response = 
requests.get(f"https://api.exchangerate-api.com/v4/latest/{from_currency}")
    rates = response.json().get('rates', {})
    converted_amount = amount * rates.get(to_currency, 1)

    return jsonify({ 'convertedAmount': converted_amount })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

