require("dotenv").config();

var { Liquid } = require('liquidjs');
var config = {
    cache: process.env.NODE_ENV === 'production'
}
var engine = new Liquid(config);
console.log(`NODE_ENV => ${process.env.NODE_ENV}`);

module.exports = {
    engine: engine.express()
}