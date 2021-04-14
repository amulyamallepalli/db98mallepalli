var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Tea_controller = require('../controllers/Tea');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Tea ROUTES ///
// POST request for creating a Tea.
router.post('/resource/Teas', Tea_controller.Tea_create_post);
// DELETE request to delete Tea.
router.delete('/resource/Teas/:id', Tea_controller.Tea_delete);
// PUT request to update Tea.
router.put('/resource/Teas/:id', Tea_controller.Tea_update_put);
// GET request for one Tea.
router.get('/resource/Teas/:id', Tea_controller.Tea_detail);
// GET request for list of all Tea items.
router.get('/resource/Teas', Tea_controller.Tea_list);
module.exports = router;