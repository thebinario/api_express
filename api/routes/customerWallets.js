module.exports = app =>{
    const express = require('express');
    const controller = require('../controllers/customerWallets')();

    // router.get('api/v1/customerWallets', controller.listCustomerWallets)

    app.get('/api/v1/customer-wallets', function (req, res) {
        res.send(controller.listCustomerWallets)
      })
}