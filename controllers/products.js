const { validate } = require('../models/Product')
const Product = require('../models/Product')

// all the products will be retrun haere
module.exports.read = function(req,res){
    Product.find({})
    .then(products=>{
        let filteredProducts = products.map((value,index)=>{
            return {id:value.id,name:value.name,quantity:value.quantity}
        });
        console.log(products,filteredProducts);
        return res.status(200).json({products:filteredProducts});        
    }).catch(err=>{
        console.log(err)
        return res.status(500).json({error:"internal server issue"});
    })
}

// this function handle the post reqest and send the result
module.exports.create = function(req,res){
    if(req.body.name && req.body.quantity){
        Product.create(req.body)
        .then((product)=>{
            console.log(product);
            return res.status(200).json({product:{
                name:product.name,
                quantity:product.quantity
            }});
        }).catch(err=>console.log(err))

    }else{
        return res.status(404).json({error:"field data is not correct"});
    }
}

// this handle the delttion of the products
module.exports.delete = function(req,res){
    console.log(req.params);
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            return res.status(500).json({error:"product id not matched"})
        }
        return res.status(200).json({message:"product deleted"})
    })  
}

// all the products will be retrun haere
module.exports.update = function(req,res){
    console.log(req.params, req.query);
    Product.findByIdAndUpdate(req.params.id,{quantity:req.query.number},{new:true})
    .then((product)=>{
        console.log(product);
        return res.status(200).json({
            product:{
                id:product.id,
                name:product.name,
                quantity:product.quantity
            },
            message: "updated successfully"
        })
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({error:"error in server"})
    })       
}

