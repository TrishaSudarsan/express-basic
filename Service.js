const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("Service Page")
})

router.get('/:id([0-9])',(req,res)=>{

  if(req.params.id<=ServiceArrayLength){
    res.send(`Service Name for this id ${service[req.params.id-1].idno} is ${service[req.params.id-1].name}`)
  }
  else{
    res.send("Wrong id")
  }
  // res.send(`List of Service ${req.params.id}`)
})


const service=[{
  idno:1,
  name:'mern'
},
{
  idno:2,
  name:'java'
},
{
  idno:3,
  name:'web development'
},
{
  idno:4,
  name:'express'
}]

const ServiceArrayLength=service.length;
module.exports=router;