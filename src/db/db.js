const { Pool } = require('pg');

///// colocar tudo no .env depois
const pool = new Pool({
  user: 'nodechat',
  host: 'localhost',
  database: 'nodechat',
  password: '1234',
  port: 5432,
});

module.exports = pool;