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

var todaysDate = new Date();
var td = document.getElementById('today');
td.innerHTML = todaysDate.toDateString();