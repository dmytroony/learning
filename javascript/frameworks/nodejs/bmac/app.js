/**
 * @license Apache-2.0
 * @copyright 2024 dmytroony
 */

'use strict';

/**
 * node modules
 */
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();


/**
 * custom modules
 */
const home = require('./src/routes/home.route')


/**
 * initial express app
 */
const app = express();


/**
 * setting ejs view engine
 */
app.set('view engine', 'ejs');


/**
 * setting public folder
 */
app.use(express.static(`${__dirname}/public`));


/**
 * setting HTTP response secure headers
 */
app.use(helmet());


/**
 * home page
 */
app.use('/', home);


app.listen(process.env.PORT, () => {
    console.log(`app listening on http://localhost:${process.env.PORT}`);
});
