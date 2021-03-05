const express = require ('express');
const morgan = require ('morgan');
const app = express();

const {mongo} = require ('./db_mongo/database');

//SETTINGS
app.set('port', process.env.PORT || 3000);
const puerto = app.get('port');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extends:false}));


//ROUTES
app.use ('/api/employee',require('./routes/employee.routes'));
app.use ('/api/product',require('./routes/product.routes'));
app.use ('/api/service',require('./routes/service.routes'));

//STARTING SERVER
app.listen(puerto,() =>{
    console.log (`server on port ${app.get('port')}`)
})