require('dotenv').config();
// library to replace try and catch in the async function that used in controllers
require("express-async-errors")
const express = require("express");
const mainRouter = require('./routers/main');
const notFoundHandler = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const app = express();
//middleware
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1',mainRouter);
app.use(notFoundHandler)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000;
const start = async()=>{
    try {
        app.listen(port, () => {
            console.log(`server listening to port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();
