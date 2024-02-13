// const express = require('express');
// const router = express.Router();

const Category = require('../model/category.model');

const categoryHandler= async(req,res)=>{
    try {
        const categories = await Category.find({})
        res.json(categories)
    } catch (error) {
        res.status(404).json({msg:"Could not Find Category"});
    }
}
module.exports = categoryHandler;