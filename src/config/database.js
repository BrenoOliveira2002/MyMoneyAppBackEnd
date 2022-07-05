const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://breno:<Breno@157751>@cluster0.kqjil0s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});