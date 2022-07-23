/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("task", function (table) {
    table.increments("id").primary();
    table.integer("book_id")
      .references("id")
      .inTable("book")
      .onDelete("CASCADE")
      .notNullable();
    table
      .integer("begin_page")
      .unsigned()
      .notNullable();
    table
      .time("begin_time")
      .notNullable()
    table
      .integer("end_page")
      .unsigned()
    table
      .time("end_time")
  }); 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("task");  
};
