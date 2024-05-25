var mongoose = require('mongoose');
var Product = require('./products.js');
var Faker = require('faker');

mongoose.connect(
    'mongodb://localhost:27017/http_client');

    async function generateProducts() {
        for(let i=0;i<10;i++){
            let p = new Product({
                name: Faker.commerce.productName(),
                departament: Faker.commerce.departament(),
                price: Faker.commerce.price()
            });
            try{
                await p.save();
            }catch(err) {
                throw new Error("Error generating products")
            }
        }
    }

    generateProducts().then(()=>{
        mongoose.disconnect();
        console.log("DEU CERTO!!!");
    })