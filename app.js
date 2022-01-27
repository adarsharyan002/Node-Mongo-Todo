const express=require('express');

const app=express();
const router =require('./Routes/app')


//middleware
app.use(express.json())
//routes
app.get('/',(req,res)=>{
    res.send('Server is running');

})

app.use('/api/v/Routes',router)

const port=3000;




app.listen(port,console.log(`server is running at port ${port}`))


