const Product = require('../models/product');

const productCtrl = {};

productCtrl.getProducts = async (req, res)=>{
   const products = await Product.find();
   res.json(products);
};

productCtrl.getSelectedProduct = async(req,res)=>{
    
    const product = await Product.findById(req.params.id);
    
    res.json(product);
};

productCtrl.createProduct = async (req,res)=>{    
   const product = new Product(req.body);
   await product.save();
   res.json({status:'Product saved'});
};

productCtrl.modifyProduct = async(req,res)=>{
    const id = req.params.id;
    const product = {        
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }
    await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
    res.json({status:'Product Updated', product});
};

productCtrl.deleteProduct = async (req,res)=>{
    const id = req.params.id;
    await Product.findByIdAndRemove(id);
    res.json({status:'Product Deleted'})
};

module.exports = productCtrl;