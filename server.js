const { response } = require('express');
const express = require('express');
const { request } = require('node:http');
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
})






server.listen(3030);