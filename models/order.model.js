const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    action: {
        type: String,
    },
    symbol: {
        type: String
    },
    qty: {
        type: Number
    },
    orderType: {
        type: String
    },
    tif: {
        type: String
    },
    price: {
        type: Number
    },
    stopPrice: {
        type: Number
    },
    comment: {
        type: String
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;