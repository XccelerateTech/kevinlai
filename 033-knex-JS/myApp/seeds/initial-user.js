
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'peter', email: 'peter@email.com', password: '12345'},
        {name: 'ken', email: 'ken@email.com', password: '12345'},
        {name: 'david', email: 'david@email.com', password: '12345'},
      ]);
    });
};
