from flask import Flask,render_template,request,redirect,url_for

from app.database import Tasks,db,app





@app.route("/",methods=['POST'])
def submit():
    task=request.form.get('task')
    if not task:
        return 'task should be added'
    if request.method=='POST':
        new_task=Tasks(task=task)
        db.session.add(new_task)
        db.session.commit()
        return redirect(url_for('addtask'))

@app.route("/")
def addtask():
    tasks=Tasks.query.all()
    return render_template('index.html',tasks=tasks)

@app.route("/delete/<int:id>")
def delete_task(id):
    task=Tasks.query.get(id)
    if task:
        db.session.delete(task)
        db.session.commit()
        return redirect(url_for('addtask'))
    return 'Task not found'
    



if __name__=='__main__':
    app.run(debug=True)