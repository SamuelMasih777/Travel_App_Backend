// const express = require('express');
// const router = express.Router();
// const CryptoJS = require('crypto-js');
const Wishlist = require('../model/wishlist.model')
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');

const createWishList = async(req,res)=>{
    const newWishList = new Wishlist(req.body);
    try {
        const savedWishList = await newWishList.save();
        res.status(201).json(savedWishList);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Failed to Create WishList"})
    }
}
const deleteWishlist = async(req,res)=>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({msg:"Hotel Deleted from WhishList"})

    } catch (error) {
        res.status(500).json({msg:"Failed to Delete Hotel from WishList"})
    }
}

const getWishlist = async(req,res)=>{
    try {
        const wishList = await Wishlist.find({});
        wishList ? res.json(wishList) : res.json({ms:"No items found in whishList"});

    } catch (error) {
        console.log(error);     
        res.status(500).json(error)       
    }
}

module.exports = createWishList,deleteWishlist,getWishlist;