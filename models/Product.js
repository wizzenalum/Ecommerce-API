const {Schema,model} = require('mongoose');

// creating schema that has name and quatity 
const productSchema = new Schema({
    name:{
        type:String
    },
    quantity:{
        type:Number
    }
})
// conveting the schema into the model
const Product = model("Product",productSchema);
module.exports = Product;