const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://breno:<password>@cluster0.kqjil0s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' e obrigatorio."

mongoose.Error.messages.Number.min =
"O '{VALUE}'informado e menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max =
"O '{VALUE}'informado e maior que o limite maximo de '{MAX}'."

mongoose.Error.messages.String.enum =
 "'{VALUE}' Nao e valido para o atributo '{PATH}' "

