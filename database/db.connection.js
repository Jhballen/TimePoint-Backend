
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const uri = "mongodb+srv://Adminitrador:TimePoint123@timepointback.7kbtp.gcp.mongodb.net/baseDB-PracticaAplicada";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
mongoose.connection.on('open', _=>{
   console.log('CONECTED WHIT DATA BASE');
});


