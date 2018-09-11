const express = require('express');
const router = express.Router();

// TODO: Move this setup into a module
// PG SETUP
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'prime_feedback', // name of database
    host: 'localhost',
    port: 5432,
    max: 10, // max number of concurrent connections
    idleTimeoutMillis: 10000 // attepmt to connect for 10 seconds
}

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('postgresql connected!!!');
});

pool.on('error', (error) => {
    console.log('Error connecting to db', error);
});

// Express removed the '/shoes' when we do a app.use
router.post('/', function (req, res) {
    const NEEDTHIS = req.body; // This is the data we sent
    console.log('In POST route - product:', NEEDTHIS); // Has a 
    const query = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    // $ with index (e.g. $1) will help improve the security of your db
    // Avoids SQL injection -- see bobby drop table comic
    pool.query(query, [NEEDTHIS.feeling, NEEDTHIS.understanding, NEEDTHIS.support, NEEDTHIS.comments]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error in POST', error);
        res.sendStatus(500);
    });
});//END POST ROUTE

// http://localhost:5002/shoes will go here
router.get('/', function (req, res) {
    console.log('In GET route');
    // The query we want to run
    const query = 'SELECT * FROM "feedback";';
    pool.query(query).then((results) => {
        console.log(results); // This is an object
        res.send(results.rows); // result.rows is an Array of shoes
    }).catch((error) => {
        console.log('Error making GET', error);
        res.sendStatus(500);
    });
}); // END GET ROUTE

// router.delete('/:id', function (req, res) {
//     console.log('In DELETE route');
//     const shoeToDelete = req.params.id;
//     const query = 'DELETE * FROM "shoes" WHERE "id"=$1;';
//     pool.query(query, [shoeToDelete]).then(() => {
//         res.sendStatus(201);
//     }).catch((error) => {
//         res.sendStatus(500);
//     });
// });

module.exports = router;