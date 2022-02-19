const uuidv4 = require('uuid/v4');

module.exports = app => {
    const customerWalletDB = app.data.customerWallets;
    const controller = {};

    const {
        customerWallets: customerWalletsMock,
    } = customerWalletDB

    controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletDB);
    controller.saveCustomerWallets = (req, res) => {
        customerWalletsMock.data.push({
            id: uuidv4(),
            parentId: uuidv4(),
            name: req.body.name,
            birthDate: req.body.birthDate,
            cellphone: req.body.cellphone,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state,
        });

        res.status(201).json(customerWalletsMock)

    }

    return controller;
}