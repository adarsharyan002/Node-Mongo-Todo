const connectDb=require('./db/Connect');

const express=require('express');

const app=express();
const router =require('./Routes/app')
const connectDB=require('./db/Connect');
require('dotenv').config()

//middleware
app.use(express.json())
//routes
app.get('/',(req,res)=>{
    res.send('Server is running');

})

app.use('/api/v/Routes',router)

const port=3000;


const startServer= async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`server is running at port ${port}`))
        
        
    } catch (error) {
        console.log(error);
    }
}

startServer();


