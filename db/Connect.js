const mongoose=require('mongoose');



const connectDb=(Url)=>{
  return  mongoose.connect(Url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})}
 
module.exports=connectDb;