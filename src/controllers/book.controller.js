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

const getBooksByUserId = async (req, res) => {
  const userId = req.params.userId;
  const result = await bookModel.getBooksByUserId(userId);
  if(result === undefined) {
    res.sendStatus(404);
  } else {
    res.status(200).send(result);
  }
}

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
  const book = req.body;
  try {
    const result = await bookModel.updateBook(book);
    if (result === 1) {
      res.sendStatus(200);
    } else {
      res.status(500).send("Failed to update book");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

const deleteBook = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await bookModel.deleteBook(id);
    if (result === 1) {
      res.sendStatus(200);
    } else {
      res.status(500).send("Failed to delete book");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = {
  create,
  getBooksByUserId,
  getBook,
  updateBook,
  deleteBook
}