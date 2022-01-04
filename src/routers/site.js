const express = require("express");
const router = express.Router();
const homeController = require("../app/controllers/HomeController");
const SearchController = require("../app/controllers/SearchController");

const authRequire = require("../app/middelwares/AuthMiddleware");

router.get("/search", SearchController.search);
router.get("/", authRequire.auth, homeController.index);

module.exports = router;
