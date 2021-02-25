const Service = require('../models/service');

const serviceCtrl = {};


serviceCtrl.getServices = async (req, res)=>{
    const services = await Service.find();
    res.json(services);
 };
 
 serviceCtrl.getSelectedService = async(req,res)=>{
     
     const service = await Service.findById(req.params.id);
     
     res.json(service);
 };
 
 serviceCtrl.createService = async (req,res)=>{    
    const service = new Service(req.body);
    await service.save();
    res.json({status:'Service saved'});
 };
 
 serviceCtrl.modifyService = async(req,res)=>{
     const id = req.params.id;
     const service = {        
         name: req.body.name,
         description: req.body.description,
         price: req.body.price
     }
     await Service.findByIdAndUpdate(id, {$set: service}, {new: true});
     res.json({status:'Product Updated', service});
 };
 
 serviceCtrl.deleteService = async (req,res)=>{
     const id = req.params.id;
     await Service.findByIdAndRemove(id);
     res.json({status:'Service Deleted'})
 };


module.exports = serviceCtrl;