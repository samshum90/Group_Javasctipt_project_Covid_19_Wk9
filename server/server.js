const express = require('express');
const app = express();
const config = require('config');
const mongoose = require("mongoose");
const usersRoute = require("./helpers/users.route.js");
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
//use users route for api/users
app.use("/api/users", usersRoute);



//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

//connect to mongodb
mongoose
  .connect("mongodb://localhost/nodejsauth", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));


// const NeedsRouter = createRouter(user);
// app.use('/api/needs', usersRouter);

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('covid_19');
    const needsCollection = db.collection('needs');
    const needsRouter = createRouter(needsCollection);
    app.use('/api/needs', needsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});

