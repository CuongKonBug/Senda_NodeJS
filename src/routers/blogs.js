const express = require("express");
const router = express.Router();
const BlogController = require("../app/controllers/BlogController");

router.post("/store", BlogController.store);
router.get("/show", BlogController.showBlog);
router.get("/create", BlogController.createBlog);
module.exports = router;
