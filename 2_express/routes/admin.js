const path = require("path");
const express = require("express");
// const rootDir = require("../util/path");
const productsController = require("../controllers/products");

const router = express.Router();

const products = [];
router.get("/add-product", productsController.getAddProduct);

// post and get uses exact path
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;
