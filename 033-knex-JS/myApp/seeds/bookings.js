
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {date: 'date', remark: 'rowValue1'},
      ]);
    });
};
