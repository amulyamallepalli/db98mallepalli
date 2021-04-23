var express = require('express');
var router = express.Router();
const Tea_controlers= require('../controllers/Tea');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET home page. */
router.get('/', Tea_controlers.Tea_view_all_Page );
router.get('/detail', Tea_controlers.Tea_view_one_Page);
/* GET create costume page */
router.get('/create', secured,Tea_controlers.Tea_create_Page);
/* GET create update page */
router.get('/update', secured,Tea_controlers.Tea_update_Page);
/* GET create costume page */
router.get('/delete', secured, Tea_controlers.Tea_delete_Page);
module.exports = router;