'use strict';

const mongoose = require ('mongoose');

// define product schema
const productSchema = mongoose.Schema ({
    name: {type: String , index:true},
    onSale: {type: Boolean, index:true}, 
    price: {type: Number , index:true},
    image: {type: String , index:true},
    tags: {type: [String] , index:true},
});

productSchema.statics.array = function (filter, skip, limit) {
    const query = Product.find (filter);
    query.skip(skip);
    query.limit(limit);
    return query.exec();
}

// create model
const Product = mongoose.model ('Product', productSchema)

// export model
module.exports = Product;