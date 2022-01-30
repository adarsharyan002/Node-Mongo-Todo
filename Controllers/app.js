const Task=require('../Models/Task')

const getAllitems= async (req,res)=>{
    try {
        const allTasks=await Task.find({})
        res.status(200).json({tasks:allTasks});
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const additem= async(req,res)=>{
    try {
        const task= await Task.create(req.body) 
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
   
}

const getitem= async(req,res)=>{
    try {
        const {id:taskID}=req.params;
        const task=await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const deleteitem= async(req,res)=>{
    try {
        const {id:taskID}=req.params;
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error})
    }
   

    
}
const updateitem=async(req,res)=>{
    try {
        const {id:taskID}=req.params;
        
        const task=await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports={
    getAllitems,updateitem,getitem,deleteitem,additem
}