const express = require('express');

const router = express.Router();

const DummyData = [{
    id : 'u1',
    title : 'Empire State Building',
    location:{
        lat : 50,
        lng : -64
    },
    creator : 'u1'
}]

router.get('/:pid',(req,res,next)=>{
    const placeId = req.params.pid;
    const place = DummyData.find(p=>{
        return p.id === placeId;
    })
    if(!place){
        res.status(404).json({message : "couldn't find the proper place for the user id!"});
    } else{
        res.json({place});    
    }
})

router.get('/user/:uid',(req,res,next)=>{
    const userId = req.params.uid;
    const place = DummyData.find(p =>{
        return p.creator === userId;
    })
    res.json({place});
})

module.exports = router;