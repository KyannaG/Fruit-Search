const input = document.querySelector('#fruit');
const suggestionsList = document.querySelector('#fruit-list');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(input) {
	return fruit.filter(option =>
		option.toLowerCase().includes(input.toLowerCase()) 
		);
}

function searchHandler(e) {
	const userInput = e.target.value.trim();

	if (userInput === '') {
		alert('Input empty');
		suggestionsList.innerHTML = ''; // Clear suggestions list
		suggestionsList.parentNode.classList.remove('has-suggestions'); // Hide suggestions list
		return;
	  }


	const results = search(userInput);
	showSuggestions(results);

 
	// TODO
}

function showSuggestions(results) {
	suggestionsList.innerHTML = ''; 
	if (results.length > 0) {
		results.forEach(result => {
		  const li = document.createElement('li');
		  li.textContent = result;
		  suggestionsList.appendChild(li);
		});
		suggestionsList.parentNode.classList.add('has-suggestions');
	  } else {
		suggestionsList.parentNode.classList.remove('has-suggestions');
	  }
	}
	// TODO

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		suggestionsList.innerHTML = '';
		suggestionsList.parentNode.classList.remove('has-suggestions');
	}
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestionsList.addEventListener('click', useSuggestion); {
	if (results.length > 0) {
		results.forEach(result => {
		  const li = document.createElement('li');
		  li.textContent = result;
		  suggestionsList.appendChild(li);
		});
		suggestionsList.parentNode.classList.add('has-suggestions');
	  } else {
		suggestionsList.parentNode.classList.remove('has-suggestions');
	  }
	}

	// TODO

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		suggestionsList.innerHTML = '';
		suggestionsList.parentNode.classList.remove('has-suggestions');
	}

	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
