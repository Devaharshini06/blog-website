from flask import Flask, render_template, request, redirect
from models import db, BlogPost

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/")
def index():
    posts = BlogPost.query.all()
    return render_template("index.html", posts=posts)

@app.route("/post/<int:id>")
def post(id):
    post = BlogPost.query.get_or_404(id)
    return render_template("post.html", post=post)

@app.route("/add", methods=["POST"])
def add_post():
    title = request.form["title"]
    content = request.form["content"]
    db.session.add(BlogPost(title=title, content=content))
    db.session.commit()
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)