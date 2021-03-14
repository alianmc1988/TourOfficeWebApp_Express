const mongoose  = require ('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema ({

    userName: { type: String, required: true },
    password:{ type: String, required: true },
    credentials:{type:String,require}
    
})
 
module.exports = mongoose.model ('User', UserSchema);
