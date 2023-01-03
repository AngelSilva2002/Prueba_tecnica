const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/Prueba", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
} )
.then((db) => console.log('Db is running'))
.catch((err)=> console.log(err));
