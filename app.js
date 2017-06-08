import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mongooseConf from './mongoose.config.js';
import Computer from './computer.model';

let app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongooseConf(mongoose);

app.get('/', function (req, res) {
  res.sendFile('index.html', {root : __dirname});
});

app.get('/products', (req, res) => {
    Computer.find((err, computers) => {
        if(err)
            res.send(err);
        else if (!computers.length)
            res.send("Database is empty!")
        else
            res.json(computers);
    })
});

app.route('/product')
    .post((req, res) => {
        Computer.create({
            name : req.body.name,
            dateCreated : req.body.dateCreated,
            available : req.body.available,
            price : req.body.price
        }, (err, computer) => {
            if (err)
                res.send(err);
            res.send("Order Created \n" + computer);
        });
    })
    .put((req, res) => {
        console.log("Nothing here yet");
    });

app.route('/product/:id')
    .get((req, res) => {
        Computer.find({'name' : req.params.id}, (err, computer) => {
            if(err)
                res.send(err);
            else if (computer == null)
                res.send("Didn't find a Match!")
            else
                res.json(computer)
        });
    })
    .delete((req, res) => {
        Computer.remove({'name' : req.params.id}, (err, computers) => {
            if(err)
                res.send(err);
            else {
                res.send("Computers deleted: \n" + computers);
            }
        });
    });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
