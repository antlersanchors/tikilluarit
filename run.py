from flask import Flask, request, redirect
import nexmo
from pb_py import main as api

host = 'aiaas.pandorabots.com'
user_key = 'ee3e0e5b6adedd58c40c4e2c84cb55ff'
app_id = '1409612288159'
botname = 'tiki'

client = nexmo.Client(key='d8f52224', secret='2f64e1f8')


app = Flask(__name__)

@app.route("/", methods=['GET','POST'])
def bot_talk():
    """Respond to incoming texts with a text from your bot"""
    request_message = request.values.get('Body',  'twiliotest')
    bot_response = api.talk(user_key, app_id, host, botname, request_message)["response"]
    # resp = twilio.twiml.Response()

    client.send_message({'from': '+4552602330', 'to': '+4552602330', 'text': resp})
    
    resp.message(bot_response)
    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
