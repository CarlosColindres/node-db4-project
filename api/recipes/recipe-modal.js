const db = require('../../data/db-config')

module.exports = {
    getRecipes() {
        return db('recipes')
    },
    getShoppingList(id){
        return db("recipe_ingredients")
        .join("ingredients", "recipe_ingredients.ingredient_id", "=", "ingredients.id")
        .select("ingredient_name", "quantity")
        .where({ 'recipe_ingredients.recipe_id': id })
        .orderBy("ingredient_name");
    },
    getInstructions(id){
            return db('recipes as rc')
                .join('recipe_steps as st', 'rc.id', 'st.recipe_id')
                .select('st.step', 'st.text')
                .where({ 'st.recipe_id': id })
                .orderBy('st.step')
        }
    }
}