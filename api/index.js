const express = require("express");
const cors = require("cors");
require("../src/db/dbConn")




const ProductsModel = require("../src/models/product");
const app = express();

// Allow all origins
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get("/", (req, res) => {     
    res.send("Hi, I am Live");
})

// Post The Data To DB
app.post("/products", async (req, res) => {
    try {
        const addingNewProduct = new ProductsModel(req.body)
        console.log(req.body);
        
        const inserData = await addingNewProduct.save();

        res.status(201).send(inserData);
    } catch (e) {
        res.status(400).send(e);
    }   
})


// Get All data From DB
app.get("/products", async (req, res) => {
    try {
        const product = await ProductsModel.find({}).sort({ranking: 1});
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
})      

// Get Data By ID 

app.get("/products/:id", async (req, res) => {
    try {

        const _id = req.params.id;
        const getProduct = await ProductsModel.findById(_id);
        res.send(getProduct);
        
    } catch (error) {
        res.status(400).send(error);
    }
})


// Update Data By Patch

app.patch("/products/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateProduct = await ProductsModel.findByIdAndUpdate(_id, req.body,{
            new: true
        });

        res.send(updateProduct);
        
    } catch (error) {
        res.status(500).send(error);
    }
})

// Delete Data From DB

app.delete("/products/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const deleteProduct = await ProductsModel.findByIdAndDelete(_id);
        res.send(deleteProduct);
    } catch (error) {
        res.status(500).send(error);
    }

})


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Yes, I am connected`);          
        });
    } catch (error) {
        console.log(error);
         
    }
}

start();

module.exports = app; // Export the app for Vercel

