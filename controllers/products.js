const Product = require('../models/Product')

// fucntion that read the Product
module.exports.read = function(req,res){
    // finding all the products
    Product.find({})
    .then(products=>{
        // removing extra information
        let filteredProducts = products.map((value,index)=>{
            return {id:value.id,name:value.name,quantity:value.quantity}
        });
        // return the products as  json responce.
        return res.status(200).json({products:filteredProducts});        
    }).catch(err=>{
        return res.status(500).json({error:"internal server issue"});
    })
}

// this function handle the post reqest and send the result
module.exports.create = function(req,res){
    // here validating that req has name and quatitiy
    if(req.body.name && req.body.quantity){
        // creatin the product
        Product.create(req.body)
        .then((product)=>{
            // responding with the created product data            
            return res.status(200).json({product:{
                name:product.name,
                quantity:product.quantity
            }});
        }).catch(err=>{
            return res.status(500).json({error:"internal server issue"});
        })

    }else{
        return res.status(404).json({error:"field data is not correct"});
    }
}

// this handle the delttion of the products
module.exports.delete = function(req,res){
    // this find the product by id and remove from the data base.
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            return res.status(500).json({error:"product id not matched"})
        }
        return res.status(200).json({message:"product deleted"})
    })  
}

// all the products will be retrun haere
module.exports.update = function(req,res){
    // findbyidandupdate(id,update,options,callback), here new:true  making return the updated product
    Product.findByIdAndUpdate(req.params.id,{quantity:req.query.number},{new:true})
    .then((product)=>{
        // responding with new updated product.
        return res.status(200).json({
            product:{
                id:product.id,
                name:product.name,
                quantity:product.quantity
            },
            message: "updated successfully"
        })
    }).catch(err=>{
        return res.status(500).json({error:"error in server"})
    })       
}

