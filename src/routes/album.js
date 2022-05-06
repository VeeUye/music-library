const albumController = require('../controllers/album');
const router = require('express').Router();

router.post('/', albumController.createAlbum);

module.exports = router;
