const mongoose = require('mongoose');
const uri=`mongodb+srv://sixto:E2C1Njd5DHUwlWAk@cluster0.0srjs62.mongodb.net/mealsApp?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Connected')
}).catch(error => console.log(error))