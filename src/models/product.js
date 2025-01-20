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
    images: {
        type: [
            {
                id: { type: String, required: true },
                width: { type: Number, required: true },
                height: { type: Number, required: true },
                url: { type: String, required: true },
                filename: { type: String, required: true },
                size: { type: Number, required: true },
                type: { type: String, required: true }
            }
        ],
        required: false // Optional: Set to `true` if this field must always be present
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