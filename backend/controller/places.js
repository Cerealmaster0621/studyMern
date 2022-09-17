const HttpError = require('../models/httpError');

const DummyData = [{
    id : 'p1',
    title : 'Empire State Building',
    location:{
        lat : 50,
        lng : -64
    },
    creator : 'u1'
}]


module.exports.getPlacesById = (req,res,next)=>{
    const placeId = req.params.pid;
    const place = DummyData.find(p=>{
        return p.id === placeId;
    })
    if(!place) throw new HttpError("You don't have any places!",404);
    res.json({place});    
}

module.exports.getPlaceByUserId = (req,res,next)=>{
    const userId = req.params.uid;
    const place = DummyData.find(p =>{
        return p.creator === userId;
    })

    if(!place){
        new HttpError("we don't find matching place for this user",404);
    }
    res.json({place});
}

module.exports.postNewPlace = (req,res,next) =>{
    const {title, coordinates,creator} = req.body;    
    const createdPlace = {
        id: "u2",
        title : title,
        location : coordinates,
        creator : creator
    }
    DummyData.push(createdPlace);
    res.status(201).json({"place" : createdPlace});
}