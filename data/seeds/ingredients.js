
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'steak'},
        {ingredient_name: 'salt'},
        {ingredient_name: 'pepper'}
      ]);
    });
};
