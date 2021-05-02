var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
  strDrink: {type: String, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true}
}, {timestamps: true});

mongoose.model('Ingredient', IngredientSchema);