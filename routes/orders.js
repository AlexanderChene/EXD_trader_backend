const router = require('express').Router();
let Order = require('../models/order.model');


router.route('/').get((req,res)=>{
    Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error '+ err));
});

router.route('/add').post((req, res)=>{
    const  { action, symbol, qty, orderType, tif, price, stopPrice, comment} = req.body.order;
    const newOrder = new Order({
        action, symbol, qty, orderType, tif, price, stopPrice, comment
    })
    newOrder.save()
        .then(() => res.json('Order added'))
        .catch(err => res.status(400).json('Error: ' + err));

})

module.exports = router;