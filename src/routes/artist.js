const artistController = require('../controllers/artist');

const router = require('express').Router();

router.post('/', artistController.createArtist);

router.get('/', artistController.readArtist);

router.get('/:artistId', artistController.readSingleArtist);

module.exports = router;
