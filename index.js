const express = require('express')
const modelSchema = require('./model')
const app = express()

app.use(express.json())

app.post('/addUser', (req,res)=>{
    let name = req.body.name
    let email = req.body.email
    let validation = ''

    if(!req.body.name && !req.body.email){
        validation +='name and email is required'
        res.send({
            success:false,
            status:400,
            message:validation,
        })
    }
    if(!req.body.name){
        validation +='name is required'
        res.send({
            success:false,
            status:400,
            message:validation,   
        })
    }
    if(!req.body.email){
        validation +='email is required'
        res.send({
            success:false,
            status:400,
            message:validation,
        })
    }
    else{
        validation += 'name and email added successfully'
        res.send({
            success:true,
            status:200,
            message:validation,
            name:name,
            email:email
        })
    } 
})

app.listen(5000, (err)=>{
    if(err){
        console.log("error occured"+err);
    }
    else{
        console.log("server connected");
    }
})