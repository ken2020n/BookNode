const bookModel = require("../models/book.model");

const create = async (req, res) => {
  const book = req.body;
  try {
    const result = await bookModel.create(book);
    if (result.rowCount === 1) {
      res.sendStatus(200);
    } else {
      res.status(500).send("Failed to create book");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getBook = async (req, res) => {
  const id = req.params.id;
  const result = await bookModel.getBook(id);
  if(result === undefined) {
    res.sendStatus(404);
  } else {
    res.status(200).send(result);
  }
}

const updateBook = async (req, res) => {
}

const deleteBook = async (req, res) => {
}

module.exports = {
  create,
  getBook,
  updateBook,
  deleteBook
}