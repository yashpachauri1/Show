const express = require('express');
const event = require('../models/event')
const checkAuthMiddleware = require('../util/auth')
const router = express.Router();

 router.use(checkAuthMiddleware);
 
 router.get('/', async (req, res, next) => {
    const user_id = req.user._id;
    try {
        const allEvents = await event.find({user_id});
        res.json({ events: allEvents });
    } catch (error) {
        console.log(error);
        next(error);
        return; // Add this line
    }
});



router.post('/', async(req, res, next)=>{
    const user_id = req.user._id; // it comes from 'util/auth' we use it because of the only one user access there taks 
    const {name, task} = req.body

    try{
        const addEvent = await event.create({name, task, user_id});
        // res.json({event:resposnse},{status:200})
        res.send(addEvent)
    }
    catch(error){
        console.log(error);
        next(error)
    }

});

router.get('/:id', async(req, res, next)=>{

    const {id} = req.params;
  
    try{
        const singleEvent = await event.findById({_id:id});
        res.json({event:singleEvent})
    }
    catch(error)
    {
        console.log(error);
        next(error)
    }
});

router.patch('/:id', async(req, res, next)=>{

    const {id} = req.params
     const data=req.body


    try{
         const update = await event.findByIdAndUpdate(id,data, {new:true});
         res.send(update);
    }

    catch(error){
        console.log(error)
    }

});

router.delete('/:id', async(req, res, next)=>{

    const {id} = req.params;

    try{
        const deleteEvent = await event.findByIdAndDelete(id);
        res.send(deleteEvent)
    }
    catch(error)
    {
        console.log(error);
    }
})


module.exports = router