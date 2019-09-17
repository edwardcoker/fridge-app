const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const db = require('./db');

app.use(express.urlencoded());
app.use(express.json())

db.connect().then(dbo => {
    app.get('/rest/getUserData', (req, res) => {
        dbo.collection('products').find({}).toArray((err, results) => {
            if(err) throw err;
            res.send(results);
        })
    })
})
