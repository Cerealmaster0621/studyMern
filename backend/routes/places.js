const express = require('express');
const router = express.Router();
const {getPlacesById, getPlacesByUserId, postNewPlace,patchPlacesById,deletePlaceById} = require('../controller/places');

router.get('/:pid',getPlacesById);

router.get('/user/:uid', getPlacesByUserId);

router.post('/', postNewPlace);

router.patch('/:pid',patchPlacesById);

router.delete('/:pid', deletePlaceById);
module.exports = router;