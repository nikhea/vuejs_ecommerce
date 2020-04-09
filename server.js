// server.js
const express = require('express');
// var path = require('path');
const serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('vue serve started')
});
