const knex = require("../knex");

const create = async (book) => {
  return await knex("book").insert({
    user_id: book.user_id,
    title: book.title,
    author: book.author,
    pages: book.pages
  });
}

const getBook = async (id) => {
  return await knex
  .select({
    id: "id",
    user_id: "user_id",
    title: "title",
    author: "author",
    pages: "pages",
  })
  .from("book")
  .where({ id: id })
  .first();
}

const updateBook = async (book) => {
  return await knex("book")
  .update({
    title: book.title,
    author: book.author,
    pages: book.pages,
  })
  .where({ id: book.id })
  .where({ user_id: book.user_id }) 
}

const deleteBook = async (id) => {
  return await knex("book")
  .del()
  .where({ id: id });
}

module.exports = {
  create,
  getBook,
  updateBook,
  deleteBook
};