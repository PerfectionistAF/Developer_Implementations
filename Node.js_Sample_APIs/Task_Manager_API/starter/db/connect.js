const mongoose = require('mongoose');

//const ConnectionString = 

//returns a promise
/*mongoose
.connect(ConnectionString, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }) //if function is executed there and then, only require the module to execute the function
.then(()=>{console.log('Connected to the Database')}) //check connection
.catch((err)=>{console.log(err)});*/ //in case of err

//export to app.js such that if the urls can run then the db can run
const connectDB = (url) => {
    return mongoose.connect(url, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

module.exports = connectDB; //export to app.js