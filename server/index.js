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
    
    server.listen(port, function () {
        console.log(`Server is running on port: ${port}`);
    });

    return server;
};

const expressServer = bootApp();

// Export server instance for Netlify
module.exports = expressServer;