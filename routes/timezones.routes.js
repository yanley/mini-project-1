//fairly similar to calculator routes

let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    timezoneController.convert(req, res);
})

module.exports = router;