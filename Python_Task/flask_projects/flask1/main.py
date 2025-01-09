from flask import Flask,render_template
import random

app=Flask(__name__)

@app.route('/')
def index():
    return 'hello world home'

@app.route('/about')
def about():
    return 'this is about page'


@app.route('/template')
def template():
    value=['hello world','deva','santoz','sanjay','kishore']
    value=random.choice(value)
    return render_template('index.html',value=value)

@app.route('/<name>')
def template1(name):
    value=name
    return render_template('dynamic.html',value=value)

if __name__=="__main__":
    app.run(debug=True)