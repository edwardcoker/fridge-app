const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://ed:<password>@cluster0-mujvx.mongodb.net/test?retryWrites=true&w=majority";
const dbName = 'products';

module.exports = { connect };

function connect() {
    return new Promise((resolve) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, mongoDB) {
            if(err) throw err;
            const dbo = mongoDB.db(dbName);
            resolve(dbo);
        });
    });
}
