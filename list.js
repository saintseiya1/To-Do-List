// today's date 
var todaysDate = new Date();
var td = document.getElementById('today');
td.innerHTML = todaysDate.toDateString();

// create variables
var addLink = document.getElementById('add');
addLink.addEventListener('click', addItem);
elList = document.getElementById('list');	
var count = 0;

// add functionality
function addItem(e) {
	e.preventDefault();	
	newDIV = document.createElement('div');
	newDIV.innerHTML = createDIV();
	elList.appendChild(newDIV);
	createListener();
}

function createDIV(){
	count++;
	var text = '';
	text += '<label>' + count + '</label>';
	text += '&nbsp;<input type="text" placeholder="item ' + count + '" />';
	text += '&nbsp;<label>Due Date:</label>';
	text += '&nbsp;<input type="date" name="date">';
	text += '&nbsp; <button id="butt' + count + '">REMOVE</button>';	
	return text;
}

//remove functionality
function createListener() {
	num = 'butt' + count;
	newID = document.getElementById(num);
	newID.addEventListener('click', remove);
}

function remove(e) {
	e.preventDefault();
	removalDIV = this.parentNode;
	parentUL = removalDIV.parentNode;
	parentUL.removeChild(removalDIV);
}