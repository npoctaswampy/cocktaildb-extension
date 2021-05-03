var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
    idIngredient: { type: String, default: function sameAs_id() { return this._id }},
    strIngredient: {type: String},
    strDescription: {type: String},
    strType: {type: String},
    strAlcohol: {type: String},
    strABV: {type: String}
}, {timestamps: true});

mongoose.model('Ingredient', IngredientSchema);