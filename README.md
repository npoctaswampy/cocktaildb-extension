The Cocktail Project

In this app, we extend the cocktaildb api to include some never-before-seen features. These include:

- Multi-parameter filtering (without having to pay $2 to a Patreon)
- CRUD operations on both Cocktails and Ingredients

Some useful endpoints are listed below for users running this locally. If you happen to change the connection string for your locally running program, please make sure to update these strings before trying them out!

You can run this project by simply typing `node app.js` in the root directory.

Now for the stuff I didn't get done!
- Local objects aren't included in search or random results. This is something we should work on in the future to extend the app.
- You cannot filter across different types of arguments. So no mixing Category with Ingredients in the search params. This is something I looked into, and decided the complexity was too high for a 3-day project, and what's here should be good enough to be considered an MVP.
- Error handling. Some basic error handling is present, but is definitely not complete. 
- In future iterations, we should check that ingredients exist before adding cocktails. 
- No tests. Ouch. This one really hurts. Future work should be done to abstract out the repository and webservice operations so they can be mocked and tests can be written. This is my first effort with node.js, and testing is quite a lot to learn right now.


Goals:
- Duplicate Original Functionality (DONE)
- Add Create, Update, Delete for Cocktails and Ingredients (DONE)
- Integrate local stuff into GET endpoints (DONE for filter)
- Multiple filtering parameters (DONE for filter)

CRUD Enpoints:
POST:
http://localhost:8080/cocktail

Body fields:
  strDrink
  strDrinkAlternate
  strTags
  strVideo
  strCategory
  strIBA
  strAlcoholic
  strGlass
  strInstructions
  strInstructionsES
  strInstructionsDE
  strInstructionsFR
  strInstructionsIT
  strDrinkThumb
  strIngredient1
  strIngredient2
  strIngredient3
  strIngredient4
  strIngredient5
  strIngredient6
  strIngredient7
  strIngredient8
  strIngredient9
  strIngredient10
  strIngredient11
  strIngredient12
  strIngredient13
  strIngredient14
  strIngredient15
  strMeasure1
  strMeasure2
  strMeasure3
  strMeasure4
  strMeasure5
  strMeasure6
  strMeasure7
  strMeasure8
  strMeasure9
  strMeasure10
  strMeasure11
  strMeasure12
  strMeasure13
  strMeasure14
  strMeasure15
  strImageSource
  strImageAttribution
  strCreativeCommonsConfirmed

PUT
http://localhost:8080/cocktail/:id
Same fields as POST

DELETE 
http://localhost:8080/cocktail/:id
No Fields

GET (same functionality as cocktail lookup below)
http://localhost:8080/cocktail/:id

Search Endpoints:

Search by name
http://localhost:8080/search/cocktail?name=margarita

Search by first letter
http://localhost:8080/search/cocktail?firstletter=m

Search by ingredient
http://localhost:8080/search/ingredient?ingredient=Gin


Filter Endpoints

Filter by alcoholic
http://localhost:8080/filter/alcohol?alcoholic=Non_Alcoholic

Filter by ingredient
http://localhost:8080/filter/ingredient?ingredient=gin

Filter by glass
http://localhost:8080/filter/glass?glass=Champagne_flute

Filter by category
http://localhost:8080/filter/category?category=Ordinary_Drink

Tip: Filter by multiple things like so:
http://localhost:8080/filter/glass?glass=Champagne_flute&glass=Cocktail_glass

Random Endpoint
http://localhost:8080/random


Lookup Endpoints

Lookup by ingredient
http://localhost:8080/lookup/ingredient?id=552

Lookup by cocktail
http://localhost:8080/lookup/cocktail?id=11007
