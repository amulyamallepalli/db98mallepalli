var express = require('express');
var router = express.Router();
const Tea_controlers= require('../controllers/Tea');

/* GET home page. */
router.get('/', Tea_controlers.Tea_view_all_Page );
router.get('/detail', Tea_controlers.Tea_view_one_Page);
/* GET create costume page */
router.get('/create', Tea_controlers.Tea_create_Page);
/* GET create update page */
router.get('/update', Tea_controlers.Tea_update_Page);
/* GET create costume page */
router.get('/delete', Tea_controlers.Tea_delete_Page);
module.exports = router;