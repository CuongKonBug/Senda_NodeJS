// const Product = require("../models/Products");
// const Category = require("../models/Categorys");
const Product = require("../models/Products");

const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class SearchController {
  search(req, res, next) {
    var data = req.query.search;

    Product.find({ name: data })
      .then((product = product
        .toLowerCase()
        .indexOf(data.toLowerCase()) !== -1) => {
        res.render("home", {
          product: mutipleMongooseToObject(product),
        });
      })
      .catch(() => {
        res.send("kHÔNG có");
      });
  }
}
module.exports = new SearchController();
