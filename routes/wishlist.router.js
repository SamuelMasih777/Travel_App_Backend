const express = require('express');
const router = express.Router();
// const CryptoJS = require('crypto-js');
// const Whishlist = require('../model/wishlist.model')
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');
const verifyUser = require("../middleware/verifyuser")
// const Wishlist = require('../model/wishlist.model');
const createWishList = require('../controllers/wishlistController')
const deleteWishlist = require('../controllers/wishlistController')
const getWishlist = require('../controllers/wishlistController')

router.route("/")
    .post(verifyUser, createWishList)
router.route("/:id")//Delete :id should be there we have to pass it
    .delete(verifyUser, deleteWishlist)
router.route("/")
    .get(verifyUser,getWishlist)

module.exports = router;