module.exports = app => {
    const controller = app.controllers.customerWallets;


    app.get('/api/v1/customer-wallets', controller.listCustomerWallets)

}