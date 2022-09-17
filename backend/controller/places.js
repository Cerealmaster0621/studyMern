const HttpError = require('../models/httpError');

let DummyData = [{
    id : 'p1',
    title : 'Empire State Building',
    location:{
        lat : 50,
        lng : -64
    },
    creator : 'u1'
}]

let cnt = 2;

module.exports.getPlacesById = (req,res,next)=>{
    const placeId = req.params.pid;
    const place = DummyData.find(p=>{
        return p.id === placeId;
    })
    if(!place) throw new HttpError("You don't have any places!",404);
    res.json({place});    
}

module.exports.getPlacesByUserId = (req,res,next)=>{
    const userId = req.params.uid;
    const places = DummyData.filter(p =>{
        return p.creator === userId;
    })

    if(!places || places.length === 0){
        new HttpError("we don't find matching place for this user",404);
    }
    res.json({places});
}

module.exports.postNewPlace = (req,res,next) =>{
    const {title, coordinates,creator} = req.body;    
    const createdPlace = {
        id: "p"&&cnt,
        title : title,
        location : coordinates,
        creator : creator
    }
    DummyData.push(createdPlace);
    cnt++;
    res.status(201).json({"place" : createdPlace});
}

module.exports.patchPlacesById = (req,res,next) =>{
    const placeId = req.params.pid;
    const {title,creator} = req.body;
    //copy entire found objects and update it in once
    const updatedPlace = {...DummyData.find(p => p.id === placeId)};
    const updatedPlaceIndex = DummyData.findIndex(p => p.id === placeId);
    updatedPlace.title = title;
    updatedPlace.creator = creator;

    DummyData[updatedPlaceIndex] = updatedPlace;

    res.status(200).json({"place" : updatedPlace});
}

module.exports.deletePlaceById = (req,res,next) =>{
    const placeId = req.params.pid;
    const deletedData = DummyData.find(p=>p.id === placeId);
    DummyData = DummyData.filter(p => p.id!==placeId);

    res.status(200).json({"deletedPlace" : deletedData});
}