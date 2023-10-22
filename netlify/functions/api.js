const ServerlessHttp = require('serverless-http');
const expressServer = require('../../server');

// Create serverless function for express to work in Netlify production builds
const netlifyHandler = ServerlessHttp(expressServer)

module.exports = netlifyHandler;