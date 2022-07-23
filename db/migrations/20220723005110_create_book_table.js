/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("book", function (table) {
    table.increments("id").primary();
    table.integer("user_id")
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .notNullable();
    table
      .string("title", 64)
      .notNullable()
      .index();
    table
      .string("author", 64)
      .index();
    table
      .integer("pages")
      .unsigned()
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("book");  
};
