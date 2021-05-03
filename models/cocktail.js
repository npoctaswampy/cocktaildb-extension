var mongoose = require('mongoose');
var uuid = require('node-uuid');

var CocktailSchema = new mongoose.Schema({
  strId: { type: String, default: function sameAs_id() { return this._id }},
  strDrink: {type: String},
  strDrinkAlternate: {type: String},
  strTags: {type: String},
  strVideo: {type: String},
  strCategory: {type: String},
  strIBA: {type: String},
  strAlcoholic: {type: String},
  strGlass: {type: String},
  strInstructions: {type: String},
  strInstructionsES: {type: String},
  strInstructionsDE: {type: String},
  strInstructionsFR: {type: String},
  strInstructionsIT: {type: String},
  strDrinkThumb: {type: String},
  strIngredient1: {type: String},
  strIngredient2: {type: String},
  strIngredient3: {type: String},
  strIngredient4: {type: String},
  strIngredient5: {type: String},
  strIngredient6: {type: String},
  strIngredient7: {type: String},
  strIngredient8: {type: String},
  strIngredient9: {type: String},
  strIngredient10: {type: String},
  strIngredient11: {type: String},
  strIngredient12: {type: String},
  strIngredient13: {type: String},
  strIngredient14: {type: String},
  strIngredient15: {type: String},
  strMeasure1: {type: String},
  strMeasure2: {type: String},
  strMeasure3: {type: String},
  strMeasure4: {type: String},
  strMeasure5: {type: String},
  strMeasure6: {type: String},
  strMeasure7: {type: String},
  strMeasure8: {type: String},
  strMeasure9: {type: String},
  strMeasure10: {type: String},
  strMeasure11: {type: String},
  strMeasure12: {type: String},
  strMeasure13: {type: String},
  strMeasure14: {type: String},
  strMeasure15: {type: String},
  strImageSource: {type: String},
  strImageAttribution: {type: String},
  strCreativeCommonsConfirmed: {type: String},
  dateModified: {type: String}
}, {timestamps: true});

mongoose.model('Cocktail', CocktailSchema);