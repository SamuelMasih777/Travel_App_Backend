const express = require('express');
const router = express.Router();
const categoryHandler = require('../controllers/categoryController')
const Category = require('../model/category.model');

router.route('/')
    .get(categoryHandler);
    
module.exports = router;