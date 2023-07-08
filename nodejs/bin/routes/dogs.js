const express = require('express');
const router = express.Router();
const pg = require('pg');

const pool = new pg.Pool({ /* don't expose password or any sensitive info, done only for demo */
  host: 'db',
  user: 'maria',
  password: 'pass',
  database: 'animal',
});

/* GET programming languages. */
router.get('/', (req, res, next) => {
  pool.query("SELECT * FROM dog", function(err, results) {
    if(err){
        console.error("err: "+err);
        throw err;
    }
    res.json(results.rows);
  })
});

module.exports = router;
