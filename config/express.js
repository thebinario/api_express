const express = require('express');	
const router = express.Router()
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
    const app = express();

    //seta variaveis de ambiente
    app.set('port', process.env.PORT || config.get('server.port'));

    require('../api/routes/customerWallets')(app);

    
    
    //middlewares
    app.use(bodyParser.json());

    return app
}