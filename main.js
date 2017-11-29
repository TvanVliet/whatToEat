/* The app is supposed to present a suggestion for what to eat.
functions:
	- Go through a list with dishes and present one randomly.
	- Provide recipe or a link to google search recipes.
	- Try again button

	- Later turn this small project into an android app.

*/

var dishes = ['Fish & Chips', 'Dumplings', 'Hamburgers']

// get random dish
function getDish() {
	var dish = dishes[Math.floor(Math.random() * dishes.length)];
	document.getElementById("dish").innerHTML = dish;
}

