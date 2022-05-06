const albumController = require('../controllers/album');
const router = require('express').Router();

router.post('/', albumController.createAlbum);

router.get('/', albumController.readAlbum);

router.get('/:albumId', albumController.readSingleAlbum);

router.patch('/:albumId', albumController.updateAlbum);

module.exports = router;
