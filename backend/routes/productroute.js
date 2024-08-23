const express = require("express");
const productcontroller = require("../controllers/productcontroller");

const router = express.Router();

router.get("/", productcontroller);
router.get("/id/:id", productcontroller);
router.get("/name/:name", productcontroller);
router.get("/category/:category", productcontroller);
router.get("/random", productcontroller);
router.get("/categories", productcontroller);
router.get("/subcategories", productcontroller);
module.exports = router;

//localhost:PORTNO/ == root route  welcome to express
//localhost:PORTNO/products/ ==to see all the products in the database
//localhost:PORTNO/products/id/:id == to see a specific product by id
//localhost:PORTNO/products/:name ==to see a specific product by name
//localhost:PORTNO/products/:category ==to see a specific product by category
//localhost:PORTNO/products/:price ==to see a specific product by price
//localhost:PORTNO/products/sub_category == to see a specific sub_category product
//localhost:PORTNO/products/randomproduct == to get random products size
