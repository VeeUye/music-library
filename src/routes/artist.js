const artistController = require('../controllers/artist');

const router = require('express').Router();

router.post('/', artistController.createArtist);

module.exports = router;
