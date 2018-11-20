
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lists',(table)=>{
        table.increments();
        table.integer('users_id').unsigned();
        table.foreign('users_id').references('users.id');
        table.string('content');
        table.boolean('complete');
        table.timestamps(false, true);
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('lists')
  };
  