const express = require("express");

const { postABook, getAllBooks } = require("./book.controller");

const router = express.Router();

router.post("/create-book", postABook);
router.get("/", getAllBooks);

module.exports = router;
