'use strict';

const express = require ('express');
const router = express.Router();
const Product = require ('../../models/Product');

// GET /apiv1/products
// return an array of products
router.get ('/', async (req, res, next) => {
    try {
        // get data from querystring
        const tags = req.query.tags;
        const onSale = req.query.onSale;
        const name = req.query.name;

        const skip = req.query.skip;
        const limit = req.query.limit;

        // filters
        const filter = {};

        if (tags) { // /apiv1/products?tags=outdoors
            filter.tags = tags;
        }
        
        if (onSale) { // /apiv1/products?onSale=true
            filter.onSale = onSale;
        }

        if (name) { // /apiv1/products?name=bi
            filter.name = new RegExp('^' + name, 'i');
        }

        const products = await Product.array(filter, skip, limit);
        res.json({ results: products });
    } catch (err) {
        next (err);
    }
});


// POST /apiv1/products
// create a new product (productData)
router.post ('/', async (req, res, next) => {
    try {
        const productData = req.body;
        const product = new Product (productData);
        const savedProduct = await product.save();
        res.json ({ result: savedProduct });
    } catch (err) {
        next (err);
    }
});

module.exports = router;