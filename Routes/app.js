

const express=require('express');
const router=express.Router()

const {getAllitems,additem,deleteitem,updateitem,getitem}= require('../Controllers/app')


router.route('/').get(getAllitems).post(additem);
router.route('/:id').get(getitem).patch(updateitem).delete(deleteitem)


module.exports=router;