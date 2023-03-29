const express = require('express');

const router = express.Router();

const questionController = require('../controllers/question');

// listing all the questions
router.get('/', questionController.listAll);

// creating a new question
router.post('/create', questionController.create);

// deleting a specified question
router.post('/:questionId/delete', questionController.delete);

// providing details of specified question
router.get('/:questionId', questionController.listQuestion);

// adding option to the specified question
router.post('/:questionId/options/create', questionController.addOption);

module.exports = router;