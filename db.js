const express = require('express');
const mongoose = require('mongoose');
const Product = require('./products.js');

mongoose.connect('mongodb://127.0.0.1:27017/teste');
mongoose.set('debug', true);

const app = express();

app.get('/get', function(req, res) {
  const db = mongoose.connection.useDb('products', {
    useCache: true
  });

  console.log('Find users from', db.name);
  
  Product.find().
    then(users => res.json({ users })).
    catch(err => res.status(500).json({ message: err.message }));
});

app.listen(3000);