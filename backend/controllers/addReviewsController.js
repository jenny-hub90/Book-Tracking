const addReview= require('../model/addReviews');


const addReviews = async (req, res, next) => {
  try {
    const { fullname, feedback, image } = req.body;

  
    const newReview = new addReview({
      fullname,
      feedback,
      image,
    });

   
    await newReview.save();

    res.status(201).json({
      message: 'Review added successfully',
      review: newReview,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to add review',
      error: error.message,
    });
  }
};


const updateReview = async (req, res, next) => {
    try {
        const { fullname, feedback, image } = req.body;
  
      const updatedReview = await addReview.findByIdAndUpdate({_id: req.params.id},
        {
          fullname,
          feedback,
          image,
        },
        { new: true }
      );
  
      res.json({
        message: 'Review updated successfully',
        review: updatedReview,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Failed to update review',
        error: error.message,
      });
    }
};

const deleteReview = async (req, res, next) => {
  try {

    
    await addReview.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Review deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete review',
      error: error.message,
    });
  }
};


const viewReview = async (req, res, next) => {
  try {
    
    const review = await addReview.find();

    res.json({
      message: 'Reviews retrieved successfully',
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve reviews',
      error: error.message,
    });
  }
};

module.exports = {
  addReviews,
  updateReview,
  deleteReview,
  viewReview
};
