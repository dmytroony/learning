'use strict';

// node modules
const router = require('express').Router();

// custom modules
const { checkout } = require('../controllers/checkout.controller');

router.get('/', checkout);

module.exports = router;
