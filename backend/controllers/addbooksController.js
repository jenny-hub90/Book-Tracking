const addBook= require('../model/addBooks');

// Add a book
const addBooks = async (req, res, next) => {
  try {
    const { bookname, bookauthor, image, status } = req.body;

    // Create a new book document
    const newBook = new addBook({
      bookname,
      bookauthor,
      image,
      status,
    });

    // Save the book to the database
    await newBook.save();

    res.status(201).json({
      message: 'Book added successfully',
      book: newBook,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to add book',
      error: error.message,
    });
  }
};

// Update a book
const updateBook = async (req, res, next) => {
    try {
      const { bookname, bookauthor, image, status } = req.body;
  
      // Find the book by ID and update its fields
      const updatedBook = await addBook.findByIdAndUpdate({_id: req.params.id},
        {
          bookname,
          bookauthor,
          image,
          status,
        },
        { new: true }
      );
  
      res.json({
        message: 'Book updated successfully',
        book: updatedBook,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Failed to update book',
        error: error.message,
      });
    }
};

// Delete a book
const deleteBook = async (req, res, next) => {
  try {

    // Find the book by ID and remove it from the database
    await addBook.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Book deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete book',
      error: error.message,
    });
  }
};

// View all books
const viewBook = async (req, res, next) => {
  try {
    // Retrieve all books from the database
    const books = await addBook.find();

    res.json({
      message: 'Books retrieved successfully',
      books,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve books',
      error: error.message,
    });
  }
};

module.exports = {
  addBooks,
  updateBook,
  deleteBook,
  viewBook,
};
