'use strict';

// node modules
const router = require('express').Router();

// custom modules
const { home } = require('../controllers/home.controller');

// home page route
router.get('/', home);


module.exports = router;
