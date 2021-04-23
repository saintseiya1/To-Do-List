// add button /////////////////////////////////////////
var elList, addLink, newEl, newText;

elList = document.getElementById('list');
addLink = document.querySelector('button');

function addItem(e) {
	e.preventDefault();
	newEl = document.createElement('li');
	newText = document.createTextNode('New list item');
	newEl.appendChild(newText);
	elList.appendChild(newEl);
}

addLink.addEventListener('click', addItem, false);

// today's date ////////////////////////////////////////
var todaysDate = new Date();
var td = document.getElementById('today');
td.innerHTML = todaysDate.toDateString();

/*------------------------------------------------
var button1 = document.getElementById('item1');
button1.addEventListener('click', update1);

var button2 = document.getElementById('item2');
button2.addEventListener('click', update2);

var button3 = document.getElementById('item3');
button3.addEventListener('click', update3);

function update1(e) {
	e.preventDefault();
	button1.innerHTML = 'REMOVE';
}

function update2(e) {
	e.preventDefault();
	button2.innerHTML = 'REMOVE';
}

function update3(e) {
	e.preventDefault();
	button3.innerHTML = 'REMOVE';
}
*/