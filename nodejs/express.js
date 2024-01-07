const express=require('express');
const EventEmitter=require('events');

const app=express();
const f1=require('./app');
const event=new EventEmitter();
event.on('CounterApi',()=>{
    console.log('event happen');
   
})
app.get('/',(req,res)=>{
    console.log(f1.displayName());
    res.send(f1.displayName());
    event.emit('CounterApi');
})
app.get('/search',(req,res)=>{
    res.send('search api called');
})
app.get('/update',(req,res)=>{
    res.send('update api called');
})
app.listen(3000);
