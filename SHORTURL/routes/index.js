var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers');

router.get('/', controllers.getUrl);

router.post('/addUrl', upload.none(), controllers.addUrl);


module.exports = router;
