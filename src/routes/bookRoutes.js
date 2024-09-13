const express = require('express');
const router = express.Router()
const bookController = require('../controllers/bookController')

router.post('/', bookController.createBook)
router.get('/', bookController.getBooks)
router.put('/:id', bookController.uptadeBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router;