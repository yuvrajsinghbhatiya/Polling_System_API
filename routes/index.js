const express = require('express');

const router = express.Router();

// routes related to questions
router.use('/questions', require('./question'));

// routes related to options
router.use('/options', require('./option'));

module.exports = router;