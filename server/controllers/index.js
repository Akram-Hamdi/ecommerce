const router = require("express").Router();
const addProducts = require("./admin/addProducts");
const getProducts = require("./Products/getProducts");
const deleteProduct = require("./admin/deleteProduct");
const modifyProduct = require("./admin/modifyProduct");
const addToCart = require("./admin/addToCart");
const getCart = require("./admin/getCart");
const addPersonnel = require("./admin/addPersonnel");
const getPersonnel = require("./admin/getPersonnel");
const deletePersonnel = require("./admin/deletePersonnel");
// Authentication
const { register, login, renewToken, logout } = require("./imports");
router.post("/register", register);
router.post("/login", login);
router.post("/renewtoken", renewToken);
router.get("/logoutSession", logout);

// Post requests
router.post("/addProducts", addProducts);

router.get("/getProducts", getProducts);

router.delete("/deleteProduct/:productId", deleteProduct);

router.put("/modifyProduct/:productId", modifyProduct);
router.post("/addToCart", addToCart);
router.get("/getCart/", getCart);
router.post("/addPersonnel", addPersonnel);
router.get("/getPersonnel", getPersonnel);
router.delete("/deletePersonnel/:id", deletePersonnel);

module.exports = router;
