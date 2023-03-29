const express = require('express');
const router = express.Router();

const optionController = require('../controllers/option');

// deleting specified option
router.post('/:optionId/delete', optionController.delete);
// adding vote to a specified option
router.get('/:optionId/add_vote', optionController.addVote);

module.exports = router;