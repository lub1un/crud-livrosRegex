const express = require('express');
const router = express.Router()
const authorController = require('../controllers/authorController')
const viaCepMiddleware = require('../middlewares/viaCepMiddleware')

router.post('/', viaCepMiddleware,
authorController.createAuthor);
router.get('/', authorController.getAuthors)
router.put('/:id', viaCepMiddleware, authorController.uptadeAuthor)
router.delete('/:id', authorController.deleteAuthor)

module.exports = router;