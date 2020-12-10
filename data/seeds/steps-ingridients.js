
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps_ingredients').insert([
        { quantity: 1, step_id: 1, ingredient_id: 1 },
        { quantity: 1, step_id: 2, ingredient_id: 1 },
        { quantity: 1, step_id: 3, ingredient_id: 1 },
        { quantity: 1, step_id: 3, ingredient_id: 1 }
      ]);
    });
};
