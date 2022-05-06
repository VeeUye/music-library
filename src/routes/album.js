const albumController = require('../controllers/album');
const router = require('express').Router();

router.post('/', albumController.createAlbum);
router.get('/', albumController.readAlbum);

module.exports = router;
