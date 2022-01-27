
const getAllitems=(req,res)=>{
    res.send('All items');
}

const additem=(req,res)=>{
    res.json(req.body)
}
const updateitem=(req,res)=>{
    res.send('update item')
}
const getitem=(req,res)=>{
    res.send('get single item')
}
const deleteitem=(req,res)=>{
    res.send('delete item')
}

module.exports={
    getAllitems,updateitem,getitem,deleteitem,additem
}