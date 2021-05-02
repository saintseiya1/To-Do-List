// today's date ////////////////////////////////////////
var todaysDate = new Date();
var td = document.getElementById('today');
td.innerHTML = todaysDate.toDateString();

// add button /////////////////////////////////////////
var addLink, removeLink;

var addLink = document.getElementById('add');
var removeLink = document.getElementById('remove');

var c = document.getElementById('cc');
addLink.addEventListener('click', addItem);

elList = document.getElementById('newlist');	

function addItem(e) {
	e.preventDefault();	
	
	newDiv = document.createElement('div');
	//newText = document.createTextNode(mytext());
	newDiv.innerHTML = mytext();
	//newDiv.appendChild(newText);
	elList.appendChild(newDiv);
	console.table(elList);
}

var count = 0;
function mytext() {
	count++;
	var text = '';
	text += '<label>' + count + '</label>';
	text += '&nbsp;<input type="text" placeholder="item ' + count + '" />';
	text += '&nbsp;<label>Due Date:</label>';
	text += '&nbsp;<input type="date" name="date">';
	text += '&nbsp; <button id="butt">REMOVE</button>';	

	return text;
}

removeLink.addEventListener('click', removeItem, false);

function removeItem(e) {
	e.preventDefault();
	if (count < 1) return;
	remcount = count - 1;
	var removeEl = document.getElementsByTagName('div')[remcount];
	var containerEl = removeEl.parentNode;
	containerEl.removeChild(removeEl);
	count--;
}