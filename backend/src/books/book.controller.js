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
    res.status(200).send({ message: "Book fetched successfully", book: books });
  } catch (err) {
    console.error("error fetching book", err);
    res.status(500).send({ message: "failed to fetch books" });
  }
};
module.exports = {
  postABook,
  getAllBooks,
};
