const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	//converting string to lowercase so search can be case insensitive
	const searchInput = str.toLowerCase(); 
	//comparing string against fruit list
	for(i=0; i < fruit.length;i++){
		if(fruit[i].toLowerCase().indexOf(searchInput) >-1){
			results.push(fruit[i]);
		}
	}


	

	return results;
}

function searchHandler(e) {
	//on key entry in search bar below will run to look at the search function and then showSuggestions if a part of the string matches	
	const inputVal =e.currentTarget.value;
	if (inputVal.length > 0) {
		results = search(inputVal);
	}
	showSuggestions(results, inputVal);
	

}

function showSuggestions(results, inputVal) {

	// shows a list of the items that match from the fruit list


	if (results.length > 0) {
		for (i = 0; i < results.length; i++) {
			let item = results[i];
			// Highlights only the first match
			const match = item.match(new RegExp(inputVal, 'i'));
			item = item.replace(match[0], `<strong>${match[0]}</strong>`);
			suggestions.innerHTML += `<li>${item}</li>`;
		}
		suggestions.classList.add('has-suggestions');
	} else {
		results = [];
		suggestions.innerHTML = '';
		suggestions.classList.remove('has-suggestions');
	}
}

function useSuggestion(e) {
	// when an item in the list is clicked it will fill it in on the search bar
	input.value = e.target.innerText;
	input.focus();
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);





// Referenced Code:

// https://www.youtube.com/watch?v=pdyFf1ugVfk
// https://codepen.io/ChrisBarberRiley/pen/eYdBXPP 
// https://codepen.io/mey_mnry/pen/QWqPvox?editors=1010
// https://www.youtube.com/watch?v=pdyFf1ugVfk 
// https://dev.to/codingnepal/search-bar-with-autocomplete-search-suggestions-in-javascript-32dn 
// https://www.codehim.com/vanilla-javascript/javascript-autocomplete-dropdown/ 




