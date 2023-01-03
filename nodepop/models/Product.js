'use strict';

const mongoose = require ('mongoose');

// define product schema
const productSchema = mongoose.Schema ({
    name: String,
    onSale: Boolean, 
    price: Number,
    image: String,
    tags: [String]
});

// create model
const Product = mongoose.model ('Product', productSchema)

// export model
module.exports = Product;