// today's date ////////////////////////////////////////
var todaysDate = new Date();
var td = document.getElementById('today');
td.innerHTML = todaysDate.toDateString();

// add button /////////////////////////////////////////
var addLink, removeLink;

var addLink = document.getElementById('add');
var removeLink = document.getElementById('remove');

var c = document.getElementById('cc');
addLink.addEventListener('click', temp);
myarray = [];
var text = '';
var count = 1;

function temp(e) {
	e.preventDefault();	
		text += '<div><label>' + count + ' </label>';
		text += '&nbsp;<input type="text" placeholder="item 1" />';
		text += '&nbsp;<label>Due Date:</label>';
		text += '&nbsp;<input type="date" name="date">';
		text += '&nbsp; <button id="butt' + count + '">REMOVE</button>';
		text += '</div>';	
		myarray.push(text);
		c.innerHTML = myarray;
		myarray = [];
		count++;
}

removeLink.addEventListener('click', removeItem, false);

function removeItem(e) {
	e.preventDefault();
	var newarray = myarray.pop();
	c.innerHTML = newarray;
	count--;
}