const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const controllers = require('../controllers');

// router.get('/', controllers.showIndex);

router.get('/', controllers.showAllUsers);

router.post('/', upload.none(), controllers.showIdUser);

module.exports = router;
