const artistController = require('../controllers/artist');

const router = require('express').Router();

router.post('/', artistController.createArtist);

router.get('/', artistController.readArtist);

module.exports = router;
