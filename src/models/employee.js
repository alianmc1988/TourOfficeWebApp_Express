const mongoose  = require ('mongoose');

const {Schema} = mongoose;

const EmployeeSchema = new Schema ({

    ci: { type: String, required: true },
    name:{ type: String, required: true },
    lastName:{ type: String, required: true },
    workarea:{ type: String, required: true },
    salary:{ type: Number, required: true },
    
})

module.exports = mongoose.model ('Employee', EmployeeSchema);

