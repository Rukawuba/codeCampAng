const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();

app.use(bodyParser.json());


app.listen(3000, () => console.log('Server started at port: 3000'));

app.use('/employees', employeeController);



// mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
//     if(!err)
//     console.log('MongoDB connection success');
//     else
//     console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// });


// module.exports = mongoose;