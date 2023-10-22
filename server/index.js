//Import environment variables
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const bootApp = async () => {
    const server = express();
    const port = process.env.EXPRESS_PORT;
    
    //Logging middleware
    server.use(morgan('dev'));
    
    server.use('/api', require('./api'));

    // Start server in development mode
    if(process.env.NODE_ENV === 'development') {
        server.listen(port, function () {
            console.log(`Server is running on port: ${port}`);
        });
    };

    // Export server instance for Netlify serverless function
    module.exports = server;
};

bootApp();