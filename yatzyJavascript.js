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


//Gamefunctions
var rollCount=0;

var die1 = 0;
var die2 = 0;
var die3 = 0;
var die4 = 0;
var die5 = 0;

function RollDice(){			
	if(rollCount<=2)
	{
		die1 = document.getElementById("die1");
		die2 = document.getElementById("die2");
		die3 = document.getElementById("die3");
		die4 = document.getElementById("die4");
		die5 = document.getElementById("die5");
			
		if(die1.className != "Die CheckedDie") {
			var d1 = Math.floor(Math.random() * 6) + 1;
			die1.innerHTML = d1;
		}
		if(die2.className != "Die CheckedDie") {
			var d2 = Math.floor(Math.random() * 6) + 1;
			die2.innerHTML = d2;
		}
		if(die3.className != "Die CheckedDie") {
			var d3 = Math.floor(Math.random() * 6) + 1;
			die3.innerHTML = d3;
		}
		if(die4.className != "Die CheckedDie") {
			var d4 = Math.floor(Math.random() * 6) + 1;
			die4.innerHTML = d4;
		}
		if(die5.className != "Die CheckedDie") {
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
	if(rollCount!=0)
	{
	if(document.getElementById(id).className == "Die CheckedDie")
		document.getElementById(id).className = "Die";
	else if(document.getElementById(id).className == "Die")
		document.getElementById(id).className += " CheckedDie";
	}
}
	
	

//playerfunctions

var yatzyPoints = {1:0,2:0,3:0,4:0,5:0,6:0,bonus:0,onePair:0,twoPair:0,threeOfAKind:0, fourOfAKind:0,lowStrait:0,highStrait:0,fullHouse:0,chance:0,yatzy:0};	
var amountOfPlayers=0;
var currentPlayer=0;

function SetPlayers(amount){
	amountOfPlayers=amount;
	
	for(i=0;i<amountOfPlayers;i++)
	{
		
	}
	currentPlayer=1;	
	document.getElementById("currentPlayer").innerHTML = currentPlayer;
}

function EndTurn()
{
	//change player
	if(rollcount>0)
	{
	if(currentPlayer<amountOfPlayers){
	currentPlayer=++currentPlayer;
	}
	else{
		currentPlayer=1;
	}
	document.getElementById("currentPlayer").innerHTML = currentPlayer;
	
	//reset dice
	document.getElementById("die1").className = "Die";
	document.getElementById("die2").className = "Die";
	document.getElementById("die3").className = "Die";
	document.getElementById("die4").className = "Die";
	document.getElementById("die5").className = "Die";
	
	die1.innerHTML=0;
	die2.innerHTML=0;
	die3.innerHTML=0;
	die4.innerHTML=0;
	die5.innerHTML=0;
	
	//reset rollcounter
	 rollCount=0;
	 
	//save choice in table
	
	
	}
}


// append column to the HTML table
function appendColumn() {
	for	(j=0; j<amountOfPlayers;j++)
	{
		var tbl = document.getElementById('scoreBoard'), // table reference
			i;
		// open loop for each row and append cell
		for (i = 0; i < tbl.rows.length; i++) {
			if(i==0){
				createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Player "+ (1+j), 'tdScoreBoard');
			}
			else
			{
				createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), " " , 'tdScoreBoard');
			}
		}
	}
}

//boolean onlyOneChecked = false;

function checkFor1()
{
	if(onlyOneChecked=false)
	{
	pointSum=0;
	if(rollCount<0)
	{
		//alert player to roll first		
	}
	else
	{
		if(die1.className=="Die CheckedDie" && die1.innerHTML=="1")
		{
			pointSum=+pointSum+parseInt(die1.innerHTML);
		}
		if(die2.className=="Die CheckedDie" && die2.innerHTML=="1")
		{
			pointSum=+pointSum+parseInt(die2.innerHTML);
		}
		if(die3.className=="Die CheckedDie" && die3.innerHTML=="1")
		{
			pointSum=+pointSum+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie" && die4.innerHTML=="1")
		{
			pointSum=+pointSum+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML=="1")
		{
			pointSum=+pointSum+parseInt(die5.innerHTML);
		}
		
		 
		
		var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
			d = t.getElementsByTagName("tr")[1],
			r = d.getElementsByTagName("td")[currentPlayer];
		
			r.innerHTML=pointSum;
			r.style.backgroundColor="#70db70";
	}
	}	
}
function checkFor2()
{
	pointSum=0;
	
	
	if(rollCount<0)
	{
		//alert player to roll first		
	}
	else
	{
		if(die1.className=="Die CheckedDie" && die1.innerHTML=="2")
		{
			pointSum=+pointSum+parseInt(die1.innerHTML);
		}
		if(die2.className=="Die CheckedDie" && die2.innerHTML=="2")
		{
			pointSum=+pointSum+parseInt(die2.innerHTML);
		}
		if(die3.className=="Die CheckedDie" && die3.innerHTML=="2")
		{
			pointSum=+pointSum+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie" && die4.innerHTML=="2")
		{
			pointSum=+pointSum+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML=="2")
		{
			pointSum=+pointSum+parseInt(die5.innerHTML);
		}
		
		var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
			d = t.getElementsByTagName("tr")[2],
			r = d.getElementsByTagName("td")[currentPlayer];
		
			r.innerHTML=pointSum;
			r.style.backgroundColor="#70db70";
	}
}
function checkFor3()
{
	pointSum=0;
	
	
	if(rollCount=0)
	{
		//alert player to roll first		
	}
	else
	{
		if(die1.className=="Die CheckedDie" && die1.innerHTML=="3")
		{
			pointSum=+pointSum+parseInt(die1.innerHTML);
		}
		if(die2.className=="Die CheckedDie" && die2.innerHTML=="3")
		{
			pointSum=+pointSum+parseInt(die2.innerHTML);
		}
		if(die3.className=="Die CheckedDie" && die3.innerHTML=="3")
		{
			pointSum=+pointSum+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie" && die4.innerHTML=="3")
		{
			pointSum=+pointSum+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML=="3")
		{
			pointSum=+pointSum+parseInt(die5.innerHTML);
		}
		
		var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
			d = t.getElementsByTagName("tr")[3],
			r = d.getElementsByTagName("td")[currentPlayer];
		
			r.innerHTML=pointSum;
			r.style.background="#70db70";
	}
}
function checkFor4()
{
	pointSum=0;
	
	if(rollCount<0)
	{
		//alert player to roll first		
	}
	else
	{
		if(die1.className=="Die CheckedDie" && die1.innerHTML=="4")
		{
			pointSum=+pointSum+parseInt(die1.innerHTML);
		}
		if(die2.className=="Die CheckedDie" && die2.innerHTML=="4")
		{
			pointSum=+pointSum+parseInt(die2.innerHTML);
		}
		if(die3.className=="Die CheckedDie" && die3.innerHTML=="4")
		{
			pointSum=+pointSum+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie" && die4.innerHTML=="4")
		{
			pointSum=+pointSum+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML=="4")
		{
			pointSum=+pointSum+parseInt(die5.innerHTML);
		}
		
		var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
			d = t.getElementsByTagName("tr")[4],
			r = d.getElementsByTagName("td")[currentPlayer];
		
			r.innerHTML=pointSum;
			r.style.backgroundColor="#70db70";
	}
}
function checkFor5()
{
	pointSum=0;
	
	
	if(rollCount<0)
	{
		//alert player to roll first		
	}
	else
	{
		if(die1.className=="Die CheckedDie" && die1.innerHTML=="5")
		{
			pointSum=+pointSum+parseInt(die1.innerHTML);
		}
		if(die2.className=="Die CheckedDie" && die2.innerHTML=="5")
		{
			pointSum=+pointSum+parseInt(die2.innerHTML);
		}
		if(die3.className=="Die CheckedDie" && die3.innerHTML=="5")
		{
			pointSum=+pointSum+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie" && die4.innerHTML=="5")
		{
			pointSum=+pointSum+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML=="5")
		{
			pointSum=+pointSum+parseInt(die5.innerHTML);
		}
		
		var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
			d = t.getElementsByTagName("tr")[5],
			r = d.getElementsByTagName("td")[currentPlayer];
		
			r.innerHTML=pointSum;
			r.style.backgroundColor="#70db70";
	}
}
function checkFor6()
{
	pointSum=0;
	
	
	if(rollCount<0)
	{
		//alert player to roll first		
	}
	else
	{
		if(die1.className=="Die CheckedDie" && die1.innerHTML=="6")
		{
			pointSum=+pointSum+parseInt(die1.innerHTML);
		}
		if(die2.className=="Die CheckedDie" && die2.innerHTML=="6")
		{
			pointSum=+pointSum+parseInt(die2.innerHTML);
		}
		if(die3.className=="Die CheckedDie" && die3.innerHTML=="6")
		{
			pointSum=+pointSum+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie" && die4.innerHTML=="6")
		{
			pointSum=+pointSum+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML=="6")
		{
			pointSum=+pointSum+parseInt(die5.innerHTML);
		}
		
		var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
			d = t.getElementsByTagName("tr")[6],
			r = d.getElementsByTagName("td")[currentPlayer];
		
			r.innerHTML=pointSum;
			r.style.backgroundColor="#70db70";
	}
}
function checkForOnePair(){}
function checkForTwoPair(){}
function checkForThreeOfAKind(){}
function checkForFourOfAKind(){}
function checkForLowStrait(){}
function checkForHighStrait(){}
function checkForFullHouse(){}
function checkForChance(){}
function checkForYatzy(){}





// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}

var pointSum=0;

function AddEyes(){
	if(rollCount<0)
	{
		//alert player to roll first		
	}
	else
	{
		if(die1.className=="Die CheckedDie")
		{
			pointSum=+pointSum+parseInt(die1.innerHTML);
		}
		if(die2.className=="Die CheckedDie")
		{
			pointSum=+pointSum+parseInt(die2.innerHTML);
		}
		if(die3.className=="Die CheckedDie")
		{
			pointSum=+pointSum+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie")
		{
			pointSum=+pointSum+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie")
		{
			pointSum=+pointSum+parseInt(die5.innerHTML);
		}
		
		document.getElementById("sum").innerHTML=pointSum;
		
	}	
}


