const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const app=express()
const mongoose = require ('mongoose')
mongoose.connect("mongodb://localhost:27017/T")
.then(console.log("mongodb connected"))
.catch((err)=>{
    console.log(err)
})
app.use(cors())
app.use(express.json())

const route = require('./route')
app.use('/abc',route)
app.get(('/'),(req,res)=>{
    res.send("Welcome at port 8000")
})

app.listen(8000,()=>console.log("Running at localhost:8000"))