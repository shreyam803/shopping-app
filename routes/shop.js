const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('middleware two');
    res.send("hello");
   // next();      //allows the request to continue to the middleware in line
    
});

module.exports = router;
