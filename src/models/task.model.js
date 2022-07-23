const knex = require("../knex");

const create = async (task) => {
  return await knex("task").insert({
    book_id: task.book_id,
    begin_page: task.begin_page,
    begin_time: task.begin_time
  });
}

const getTask = async (id) => {
  // return await knex
  // .select({
  //   id: "id",
  //   user_id: "user_id",
  //   title: "title",
  //   author: "author",
  //   pages: "pages",
  // })
  // .from("book")
  // .where({ id: id })
  // .first();
}

const updateTask = async (book) => {
  // return await knex("book")
  // .update({
  //   title: book.title,
  //   author: book.author,
  //   pages: book.pages,
  // })
  // .where({ id: book.id })
  // .where({ user_id: book.user_id }) 
}

const deleteTask = async (id) => {
  // return await knex("book")
  // .del()
  // .where({ id: id });
}

module.exports = {
  create,
  getTask,
  updateTask,
  deleteTask
};