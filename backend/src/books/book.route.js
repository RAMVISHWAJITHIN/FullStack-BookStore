// const express = require("express");

// const {
//   postABook,
//   getAllBooks,
//   getSingleBook,
//   updateBook,
//   deleteBook,
// } = require("./book.controller");
// const verifyAdminToken = require("../middleware/verifyAdminToken");

// const router = express.Router();

// router.post("/create-book", verifyAdminToken,postABook);
// router.get("/", getAllBooks);
// router.get("/:id", getSingleBook);
// router.put("/edit/:id", verifyAdminToken,updateBook);
// router.delete("/:id",verifyAdminToken, deleteBook);
// module.exports = router;
const express = require("express");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");

const verifyAdminToken = require("../middleware/verifyAdminToken");

const router = express.Router();

router.post("/create-book", verifyAdminToken, postABook);
router.put("/edit/:id", verifyAdminToken, updateBook);
router.delete("/:id", verifyAdminToken, deleteBook);

// Public routes (accessible to everyone)
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);

module.exports = router;

