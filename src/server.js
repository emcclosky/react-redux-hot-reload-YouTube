const path = require('path');
const express = require('express');

module.exports = {
    app: function () {
        const app = express()

        app.get('/', function (_, res) { res.sendFile('./index.html') })

        return app;   
    }

}