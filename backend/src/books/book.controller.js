const Book = require("./book.model");
const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (err) {
    console.error("error creating book", err);
    res.status(500).send({ message: "failed to create book" });
  }
};
//get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res
      .status(200)
      .send({ message: "Books fetched successfully", book: books });
  } catch (err) {
    console.error("error fetching book", err);
    res.status(500).send({ message: "failed to fetch books" });
  }
};

//get single book
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "not found book" });
    }
    res.status(200).send({ message: "Book fetched successfully", book: book });
  } catch (err) {
    console.error("error fetching book", err);
    res.status(500).send({ message: "failed to fetch book" });
  }
};
//update the book data
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "not found book" });
    }
    res
      .status(200)
      .send({ message: "Book updated  successfully", book: updatedBook });
  } catch (err) {
    console.error("error updating book", err);
    res.status(500).send({ message: "failed to update book" });
  }
};
//delete the book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    res
      .status(200)
      .send({ message: "Books deleted successfully", book: deletedBook });
  } catch (err) {
    console.error("error deleting book", err);
    res.status(500).send({ message: "failed to delete book" });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
