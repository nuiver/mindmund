"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const uri = 'mongodb://localhost:27017/mundmindDB';
mongodb_1.MongoClient.connect(uri, (err, client) => {
    if (err) {
        throw err;
    }
    const db = client.db('mundmindDB');
    db.collection('todos').find().toArray((finderr, result) => {
        if (finderr) {
            throw finderr;
        }
        ;
        console.log(result);
        client.close();
    });
});
