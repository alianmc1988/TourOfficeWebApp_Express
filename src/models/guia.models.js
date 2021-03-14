const mongoose = require ('mongoose');
const {Schema} = mongoose;

const GuiaSchema = new Schema ({
    guiaNumber:{type:String,required:true},
    name:{type: String, require:true},
    lastName:{type:String, require:true},
    numberID: {type:String, require:true},
    address:{type:String, require:true},
    telephone: {},
    languajes:{},   
    escolaridad:{type:String, require:true},
    workingNow:false
})

module.exports = mongoose.model ('Guia',GuiaSchema);