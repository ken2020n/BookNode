/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {id: 1, email: 'user1@mail.com', name:'A', password:'123'},
    {id: 2, email: 'user2@mail.com', name:'B', password:'123'},
    {id: 3, email: 'user3@mail.com', name:'C', password:'123'}
  ]);
};
