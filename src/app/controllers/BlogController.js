const Product = require("../models/Products");
const Blog = require("../models/Blogs");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class BlogController {
  showBlog(req, res, next) {
    Blog.find()
      .then((item) => {
        res.render("Blogs/blog", {
          item: mutipleMongooseToObject(item),
        });
      })
      .catch((err) => {});
  }
  createBlog(req, res, next) {
    res.render("blogs/createBlog");
    // console.log(res.locals.email);
  }
  store(req, res, next) {
    const blog = new Blog(req.body);
    blog
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}
module.exports = new BlogController();
