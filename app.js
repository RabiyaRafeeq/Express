const express=require('express')
const app=express()
const path=require('path')
const router=express.Router()
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'views','/index.html'))
})
router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname,'views''/about.html'))
})
app.use('/',router)
app.listen(3000)
console.log('Running at Port 3000')
