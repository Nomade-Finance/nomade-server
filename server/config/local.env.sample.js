// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
    DOMAIN: 'http://localhost:9000',
    SESSION_SECRET: 'nomadeserver-secret',
    BITCOIN_WALLET: 'bc1pc4d08zqc9je9h9zptxxmqqhm4rq3xp53k3u72j2wtjh9egjxcvtq0e5n8d',  
    VOLTAGE_NOMADE:'vO5ucqUnwiP5HBvJgwrJr4eirnErGjL1HaCogxb6yfJiR8kGDz_JMgw',


    // Control debug level for modules using visionmedia/debug
    DEBUG: ''
};
