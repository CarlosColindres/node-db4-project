
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_text:'season steak and heat up pan', step_number: 1, recipe_id:1},
        {step_text:'when pan is hot enough add steak', step_number: 2, recipe_id:1},
        {step_text:'flip steak after 4 minutes', step_number: 3, recipe_id:1},
        {step_text:'remove steak after 8 mins of cooking', step_number: 4, recipe_id:1}
      ]);
    });
};
