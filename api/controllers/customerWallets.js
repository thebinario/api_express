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

    };

    controller.removeCustomerWallets = (req, res) => {
        const customerWallet = customerWalletsMock.data.find(customerWallet => customerWallet.id === req.params.customerId);

        if (!customerWallet) {
            return res.status(404).json({
                error: 'Customer not found',
            });
        }

        customerWalletsMock.data = customerWalletsMock.data.filter(customerWallet => customerWallet.id !== req.params.customerId);

        res.status(200).json({
            message: 'Customer removed successfully',
            success: true,
            data: customerWalletsMock
        });
    }

    controller.updateCustomerWallets = (req, res) => {
        const { customerId } = req.params;
        const { name, birthDate, cellphone, phone, email, occupation, state } = req.body;

        const customerWallet = customerWalletsMock.data.find(customerWallet => customerWallet.id === customerId);

        if (!customerWallet) {
            return res.status(404).json({
                error: 'Customer not found',
            });
        }

        customerWallet.name = name;
        customerWallet.birthDate = birthDate;
        customerWallet.cellphone = cellphone;
        customerWallet.phone = phone;
        customerWallet.email = email;
        customerWallet.occupation = occupation;
        customerWallet.state = state;

        res.status(200).json({
            message: 'Customer updated successfully',
            success: true,
            data: customerWallet
        });


    }



    controller.getByName = (req, res) => {
        const { byName } = req.params;

        const filterList = (arr, name) => {
            return arr.filter(user => user.name
                .toLowerCase()
                .includes(
                    name.toLowerCase()
                ));
        };

        const customerWalletName = filterList(customerWalletsMock.data, byName);

        res.status(200).json({
            data: customerWalletName
        });


    };

    return controller;
}