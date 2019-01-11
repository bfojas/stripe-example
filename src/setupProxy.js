const proxy = require('http-proxy-middleware');

module.exports = app=>{
    app.use('/stripe' , proxy({target: 'http://localhost:4000'}));




}