console.log('iniciando o product.js');

const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const { help, showHelp} = require('yargs'); 
const { title } = require('process');
const yargs = require('yargs');
const repoFile = './database/data.json';

module.exports.AddProduct = (product, callback) => {
    var products = JSON.parse(fs.readFileSync(repoFile));

    products.push(product);

    fs.writeFile(repoFile, JSON.stringify(products), callback);
}

module.exports.ListAll = () => {
    var data = fs.readFileSync(repoFile);
    return JSON.parse(data);
}

function readFile() {
    const content = fs.readFileSync(repoFile);
    JSON.parse(content);
}

module.exports.UpdateProduct = () => { 
 
        
}


module.exports.DeleteProduct = (title) => {
    delete repoFile.splice(position, position);
    console.log("Produto Deletado.")
}


module.exports.SetProduct = (title, description, price, stock) => {
    return { 
        id: uuidv4(),
        name: title,
        description: description,
        price: price,
        stock: stock
    }
}

module.exports.GetProduct = (name) => {
    var products = JSON.parse(fs.readFileSync(repoFile));

    return products.filter(elem => elem.name === name);
}
