var express = require('express');
var router = express.Router();
var siteController = require('../app/controllers/SiteControllers');

router.use('/search', siteController.search);
router.use('/contact', siteController.contact);
router.use('/', siteController.home);
module.exports = router;
