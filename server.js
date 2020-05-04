const express = require('express');
const cors = require('cors');

require('dotenv').config();

const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // allow us to parse json

//connect to mongo database
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB database connection established successfully');
})

//router
const orderRouter = require('./routes/orders');
app.use('/orders', orderRouter);

app.listen(port , ()=>{
    console.log(`Server is running on port: ${port}`);
})

