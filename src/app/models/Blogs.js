const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
var mongooseDelete = require("mongoose-delete");
const Blog = new Schema(
  {
    titleblog: { type: String, maxLength: 255 },
    imageblog: { type: String, maxLength: 655 },
    description: { type: String },
    slug: { type: String, slug: "titleblog", unique: true },
  },
  {
    timestamps: true,
  }
);
Blog.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("Blog", Blog);
