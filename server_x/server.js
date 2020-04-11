const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());
app.use(cors());


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