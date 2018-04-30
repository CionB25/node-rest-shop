const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const Order = require('../models/order')

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
})

router.post('/', (req, res, next) => {
  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    productId: req.body.productId,
    quantity: req.body.quantity
  })
  res.status(201).json({
    message: 'Order was created',
    order: order
  });
})

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order Details'
  })
})

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order was Deleted'
  })
})

module.exports = router;
