from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///tasklist.db'
app.config['SQLALCHEMY_TRACK_MODIFICATION']=False

db=SQLAlchemy(app)


class Tasks(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    task=db.Column(db.String(200),nullable=False)
    def __str__(self):
        return f'{self.task}'
    

with app.app_context():
    db.create_all()

