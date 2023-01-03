'use strict';

const Product = require ('../../models/Product');

Product.find ((err, product) => {
    console.log(product);
})