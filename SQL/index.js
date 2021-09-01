const { Pool } = require('pg');
const config = require('../.config');

const pool = new Pool(config.pool);
module.exports = pool;
