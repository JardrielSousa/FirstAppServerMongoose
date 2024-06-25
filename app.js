const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./products.js');

var app = express();
app.use(bodyParser.json());

mongoose.connect(
    'mongodb://localhost:27017/teste').
    catch(error => handleError(error));

app.get('/products', function(req, res) {
    const db = mongoose.connection.useDb('products', {
      useCache: true
    });
  
    console.log('Find users from', db.name);
    
    Product.find().
      then(users => res.json({ users })).
      catch(err => res.status(500).json({ message: err.message }));
  });

app.listen(3000,function(){
    console.log('RODANDO...')
});