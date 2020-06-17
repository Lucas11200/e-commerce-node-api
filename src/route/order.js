const express = require('express');
const router = express.Router();
const controller = require("../controller/order");
const auth = require("../service/utils/auth")

router.get('/', auth.authorize, controller.get);
router.post('/', auth.authorize, controller.post);

module.exports = router;