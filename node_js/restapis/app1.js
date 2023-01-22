let express = require('express');
let app = express();
let port = 9500;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser');
let mongoUrl = "mongodb+srv://new_user20:test@cluster0.al5igrw.mongodb.net/?retryWrites=true&w=majority";
let db;

  //middleware
  app.use(cors());
  app.use(express.json())
app.get('/', (req , res) => { 
    res.send("hii from Express");

})
     //category
     app.get('/category',(req,res) => {
        db.collection('category').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result);
        })
     })
     
     //products
 app.get('/products/:categoryId',(req,res) => { 
      //app.get('/products/:categoryId', (req, res) =>{
    let query = {};
    let categoryId = req.params.categoryId;
    let brand = req.query.brand
    let price = req.query.price
    let size = req.query.size
    let color = req.query.color
    
    if (brand) {
        query = {category: categoryId, brand: brand}
    } else if (size && color) {
        query = {category: categoryId, size: size, color: color}
    } else if (size) {
        query = {category: categoryId, size: size}
    } else if (color) {
        query = {category: categoryId, color: color}
    } else {
        query = {category: categoryId}
    }

    console.log(categoryId, brand, size, color);
    db.collection('products').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})  
    
// placing order
app.post('/placeOrder', async (req, res) => {
    console.log(req.body);
    await db.collection('orders').insert(req.body, (err, result) => {
        if(err) throw err;
       res.send('order placed successfully');
     })
})

//getting orders
app.get('/viewOrder', (req, res) =>{
    let email = req.query.email
    let query = {};
    if (email) {
        query={email: email}
    } else {
        query={}
    }
    db.collection('orders').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})
//update order
app.put('/updateOrder/:orderId', (req, res) => {
    let oid = Number(req.params.orderId)
    db.collection('orders').updateOne(
        {orderId: oid},
        {
            $set:{
                "status": req.body.status,
                "bank_name": req.body.bank_name,
                "date": req.body.date
            }
        }, (err, result) => {
            if (err) throw err;
            res.send('order Updated')
        }
    )
})

// Delete Order
app.delete('/deleteOrder/:deleteId', (req, res) => {
    let _id = mongo.ObjectId(req.params.deleteId);
    db.collection('orders').remove({_id}, (err, result) => {
        if (err) throw err;
        res.send("Order deleted successfully")
    })
})

  
     //connect with mongo
 MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc) => {
    if(err) console.log('Error while connecting');
    db = dc.db('Myntraproject');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
 });