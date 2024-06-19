var mongoose = require('mongoose');
var Product = require('./products.js');
const { faker } = require('@faker-js/faker');

mongoose.connect(
    'mongodb://localhost:27017/teste');

    async function generateProducts() {
        for(let i=0;i<10;i++){
            let p = new Product({
                name: faker.commerce.productName(),
                departament: faker.commerce.department(),
                price: faker.commerce.price()
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