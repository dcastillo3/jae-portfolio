//Import environment variables
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const ServerlessHttp = require('serverless-http');

let netlifyHandler;

const bootApp = async () => {
    const server = express();
    const port = process.env.EXPRESS_PORT;
    
    //Logging middleware
    server.use(morgan('dev'));
    
    server.use('/api', require('./api'));

    //Create and handler for express to work on Netlify production builds
    netlifyHandler = ServerlessHttp(server);
    
    server.listen(port, function () {
        console.log(`Server is running on port: ${port}`);
    });
};

bootApp();

module.exports = netlifyHandler;