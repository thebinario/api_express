const app = require('./config/express')();
const port = app.get('port');



app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
    console.log(`Enter here link http://localhost:${port}`);
});
