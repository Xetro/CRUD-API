// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

import express from 'express';
import mongoose from 'mongoose';
import mongooseConf from './mongoose.config.js';
let app = express();

mongooseConf(mongoose);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/products', (req, res) => {

});

app.route('/product')
    .post((req, res) => {
        console.log("Nothing here yet");
    })
    .put((req, res) => {
        console.log("Nothing here yet");
    });

app.route('/product/:id')
    .get((req, res) => {
        console.log("Nothing here yet");
    })
    .delete((req, res) => {
        console.log("Nothing here yet");
    });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
