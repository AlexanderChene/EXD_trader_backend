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

});

router.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(() => res.json('Order deleted.'))
        .catch(err => res.status(400).json('Error ' + err));
});

//get single record
router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
     .then(order=> res.json(order))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res)=>{
    const  { action, symbol, qty, orderType, tif, price, stopPrice, comment} = req.body.order;
    Order.findById(req.params.id)
    .then(order=> {
        order.action = action;
        order.symbol = symbol;
        order.qty = qty;
        order.orderType = orderType;
        order.tif = tif;
        order.price = price;
        order.stopPrice = stopPrice;
        order.comment = comment;

        order.save()
            .then(()=> res.json('order updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error '+ err));
})

module.exports = router;