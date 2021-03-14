const Guia = require ('../models/guia.models');

const guiaCtrl = {};

guiaCtrl.getGuias = async (req,res) =>{
    const guias = await Guia.find();
    res.json(guias);
}

guiaCtrl.getSelectedGuia = async (req,res)=>{
    const guia = await Guia.findById(req.params.id);
    res.json(guia);
}

guiaCtrl.createNewGuia = async (req,res)=>{
    const guia = new Guia(req.body);
    await guia.save();
    res.json({status:"Guia saved", nuevo_guia:`${guia}`});
}

guiaCtrl.modifyGuia = async (req,res)=>{
    const id = req.params.id;
    const guia = {
        name:req.body.name,
        lastName:req.body.lastName,
        numberID: req.body.numberID,
        address:req.body.address,
        telephone:req.body.telephone,
        languajes:req.body.languajes,   
        escolaridad:req.body.escolaridad
    }
    await Guia.findByIdAndUpdate(id,{$set:guia},{new:true});
    res.json({status:'Guia Updated'},guia);    
}

guiaCtrl.deleteGuia = async (req,res)=>{
    const id = req.params.id;
    await Guia.findByIdAndRemove(id);
    res.json({status:'Guia Deleted'});
}

module.exports = guiaCtrl;