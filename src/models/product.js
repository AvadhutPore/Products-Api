const express = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    colors: {
        type: [String],
        required: false,
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    featured: {
        type: Boolean, 
        default: false
    },
    shipping: {
        type: Boolean, 
        default: false
    }
    
})


// We are creating new collection
const ProductsModel = new mongoose.model("Products", productSchema)

module.exports = ProductsModel;