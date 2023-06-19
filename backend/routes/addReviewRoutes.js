const express = require('express')
const router = express()

const {
    addReviews,
    updateReview,
    deleteReview,
    viewReview
}= require('../controllers/addReviewsController')

router.post('/add/reviews',addReviews)
router.put('/update/reviews/:id',updateReview)
router.delete('/delete/reviews/:id',deleteReview)
router.get('/view/reviews',viewReview)


module.exports = router