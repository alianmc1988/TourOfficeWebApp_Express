//const user = require('../models/user');
const User = require('../models/user');

const userCtrl = {};

userCtrl.getUsers = async (req, res)=>{
   const users = await User.find();
   res.json(users);
};

userCtrl.getSelectedUsers = async(req,res)=>{
    
    const user = await User.findById(req.params.id);
    
    res.json(user);
};

userCtrl.createUsers = async (req,res)=>{
   const user =  new User(req.body);
   await user.save();
   res.json({status:'200',message:'user saved'});
};

userCtrl.modifyUsers = async(req,res)=>{
    const id =  req.params.id;
    const user = {
        ci: req.body.ci,
        userName: req.body.userName,
        password: req.body.password       
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: '200', user});
};

userCtrl.deleteUsers = async (req,res)=>{
    const id = req.params.id;
    await User.findByIdAndRemove(id);
    res.json({status:'User Deleted'})
};

module.exports = userCtrl;