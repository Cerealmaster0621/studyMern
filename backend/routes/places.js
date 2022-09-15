const express = require('express');
const router = express.Router();
const {getPlacesById, getPlaceByUserId, postNewPlace} = require('../controller/places');

router.get('/:pid',getPlacesById);

router.get('/user/:uid', getPlaceByUserId);

router.post('/', postNewPlace);

module.exports = router;