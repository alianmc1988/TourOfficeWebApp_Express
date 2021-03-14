const { json } = require('body-parser');
const mongoose  = require ('mongoose');
const {Schema} = mongoose;

const ServiceSchema = new Schema ({

    name:{ type: String, required: true },
    description:{ type: String, required: true },
    dateInit:{ type: Date, required: true },
    dateEnd:{ type: Date, required: true },
    cantPax:{ type: Number, required: true },    
    guia:{type:JSON},
    transport:{type:JSON, require:true},
    report:{type:String}    
    
});

module.exports = mongoose.model ('Service', ServiceSchema);