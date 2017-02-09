//Menuchange
function ShowAmountOfPlayersDiv(){
	document.getElementById("DivAmountOfPlayers").style.display = "block";
	document.getElementById("divMenu").style.display = "none"; 
}			
function ShowGameDiv(){
	document.getElementById("divGame").style.display = "block";
	document.getElementById("DivAmountOfPlayers").style.display = "none"; 
}
	
function ShowHighScoreDiv(){
	document.getElementById("divMenu").style.display = "none"; 
}

function ShowLoginDiv(){
	document.getElementById("divMenu").style.display = "none"; 
}

var rollCount=0;

function RollDice(){			
	if(rollCount<=2)
	{
		var die1 = document.getElementById("die1");
		var die2 = document.getElementById("die2");
		var die3 = document.getElementById("die3");
		var die4 = document.getElementById("die4");
		var die5 = document.getElementById("die5");
			
		if(die1.className != "UnCheckedDie CheckedDie") {
			var d1 = Math.floor(Math.random() * 6) + 1;
			die1.innerHTML = d1;
		}
		if(die2.className != "UnCheckedDie CheckedDie") {
			var d2 = Math.floor(Math.random() * 6) + 1;
			die2.innerHTML = d2;
		}
		if(die3.className != "UnCheckedDie CheckedDie") {
			var d3 = Math.floor(Math.random() * 6) + 1;
			die3.innerHTML = d3;
		}
		if(die4.className != "UnCheckedDie CheckedDie") {
			var d4 = Math.floor(Math.random() * 6) + 1;
			die4.innerHTML = d4;
		}
		if(die5.className != "UnCheckedDie CheckedDie") {
			var d5 = Math.floor(Math.random() * 6) + 1;
			die5.innerHTML = d5;
		}
		
		++rollCount;
	}
}

/*var timeToShow = 0;
function display() {
	timeToShow++;
	document.getElementById("time").innerHTML = timeToShow;
	window.setTimeout(display, 1000);
}*/
function checkDie(id){
	if(document.getElementById(id).className == "UnCheckedDie CheckedDie")
		document.getElementById(id).className = "UnCheckedDie";
	else if(document.getElementById(id).className == "UnCheckedDie")
		document.getElementById(id).className += " CheckedDie";
	}

	var amountOfPlayers=0;
	var currentPlayer=0;

function SetPlayers(amount){
	amountOfPlayers=amount;
	currentPlayer=1;	
	document.getElementById("currentPlayer").innerHTML = currentPlayer;
}

// append column to the HTML table
function appendColumn() {
	for	(j=0; j<amountOfPlayers;j++)
	{
		var tbl = document.getElementById('scoreBoard'), // table reference
			i;
		// open loop for each row and append cell
		for (i = 0; i < tbl.rows.length; i++) {
			createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
		}
	}
}
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}


