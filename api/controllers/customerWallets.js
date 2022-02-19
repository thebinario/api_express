module.exports = () => {
    const customerWalletDB = require('../data/customerWallets.json');
    const controller = {};

    controller.listCustomerWallets = customerWalletDB;

    return controller;
}