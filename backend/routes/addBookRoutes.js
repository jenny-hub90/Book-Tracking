const express = require('express')
const router = express()

const {
    addBooks,
    updateBook,
    deleteBook,
    viewBook
}= require('../controllers/addbooksController')

router.post('/add/books',addBooks)
router.put('/update/books/:id',updateBook)
router.delete('/delete/books/:id',deleteBook)
router.get('/view/books',viewBook)


module.exports = router