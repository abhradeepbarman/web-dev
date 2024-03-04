//server instantiated
const express = require('express')
const app = express();

//used to parse req.body in express --> POST or PUT
//middleware
const bodyParser = require('body-parser');

//specifically parse the JSON data & add it to request.body object
app.use(bodyParser.json()); 

//activate the server on port 3000
app.listen(3000, () => {
    console.log('server started at port 3000');
});

//Routes
app.get('/', (req,res) => {
    res.send("Hello World!")
})

app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Card submitted successfully");
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connection successful");
})
.catch(() => {
    console.log("Error!");
})