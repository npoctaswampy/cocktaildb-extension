Goals:
- Duplicate Original Functionality (DONE)
- Add Create, Update, Delete for Cocktails and Ingredients
- Integrate local stuff into GET endpoints
- Multiple filtering parameters



Search Endpoints

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


Random Endpoint
http://localhost:8080/random


Lookup Endpoints

Lookup by ingredient
http://localhost:8080/lookup/ingredient?id=552

Lookup by cocktail
http://localhost:8080/lookup/cocktail?id=11007
