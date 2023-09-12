const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect("mongodb+srv://admin:Zeddy254@cluster0.evckdfe.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('mongodb successfully connected')
}).catch((error)=>{
    console.log('error', error)
})

app.use(bodyParser.json());

app.use('/api', require('./routes/person'));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})