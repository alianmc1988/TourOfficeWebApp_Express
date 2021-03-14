const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost/tourOffice_DB')
    .then(db=> console.log('DB is connected'))
    .catch(err=> console.log(err));
    
module.exports = mongoose;  