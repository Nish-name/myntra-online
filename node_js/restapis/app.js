let express = require('express');
let app = express();
let port = 9500;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb+srv://<nish-nish123>:<password>@cluster0.al5igrw.mongodb.net/?retryWrites=true&w=majority"
let db;
app.get('/categories', (req, res) => {
    db.collection('category').find().toArray((err,result) => {
        if(err)throw err;
        res.send(result)
})
})
     //connect with mongodb
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc) =>{
    if(err) console.log('Error while connecting');
    db = dc.db('Myntraproject');
    app.listen(port,() => {
        console.log(`server is running on port ${port}`)
    })
})