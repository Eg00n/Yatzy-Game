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
	//Update table 
	UpdateSum(currentPlayer);
	CheckForBonus(currentPlayer);
	
	//change player
	if(rollCount!=0)
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
	
	//reset round variables
	 rollCount=0;
	 ZeroPointConfirmed=0;
	 ZeroPointChoiceConfirmed=0;
	 pointSum=0;
	 document.getElementById("message").innerHTML="-";
	//save choice in table
	
	
	}
}


//Checks

var pointSum=0;
var ZeroPointConfirmed=0; 
var ZeroPointChoiceConfirmed=0;
var bonuspoints=50;

function Check(row, pointSum)
{
	if(rollCount!=0)
	{
		//checks if points is already given for field
		if(GetPointsFromSingleRowInTable(currentPlayer,row)==0)
		{
	
			//checks for any checked dice
			if(pointSum==0)
			{
				//checks for zero points confirmation
				if(ZeroPointConfirmed==1&&ZeroPointChoiceConfirmed==row)
				{
					addPointsToTable(pointSum, currentPlayer, row);
					EndTurn();
				}
				else
				{
				document.getElementById("message").innerHTML="Are you sure you want to commit 0 points? <br>- Click choice again if you are";
				ZeroPointConfirmed++; 
				ZeroPointChoiceConfirmed=row;
				}
			}
			else
			{
				addPointsToTable(pointSum, currentPlayer, row);
				EndTurn();
			}
		}
		else
		{
			document.getElementById("message").innerHTML="You can't add points to this field";
		}
	}
	else
	{
		document.getElementById("message").innerHTML="You have to roll first!";
	}
}
function checkForEyes(row)
{
pointSum=0;

	if(die1.className=="Die CheckedDie" && die1.innerHTML==row)
	{
		pointSum=+pointSum+parseInt(die1.innerHTML);
	}
	if(die2.className=="Die CheckedDie" && die2.innerHTML==row)
	{
		pointSum=+pointSum+parseInt(die2.innerHTML);
	}
	if(die3.className=="Die CheckedDie" && die3.innerHTML==row)
	{
		pointSum=+pointSum+parseInt(die3.innerHTML);
	}
	if(die4.className=="Die CheckedDie" && die4.innerHTML==row)
	{
		pointSum=+pointSum+parseInt(die4.innerHTML);
	}
	if(die5.className=="Die CheckedDie" && die5.innerHTML==row)
	{
		pointSum=+pointSum+parseInt(die5.innerHTML);
	}
	Check(row, pointSum);
}
function checkForOnePair()
{
	var onePairRow =9;
	var pair = 0;
	
	pair = 0;
	
	if(die1.className=="Die CheckedDie")
	{
		pair = parseInt(die1.innerHTML);
	
		if(die2.className=="Die CheckedDie" && die2.innerHTML==pair)
		{
			pair = pair+parseInt(die2.innerHTML);
		}
		if(die3.className=="Die CheckedDie" && die3.innerHTML==pair)
		{
			pair = pair+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie" && die4.innerHTML==pair)
		{
			pair = pair+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML==pair)
		{
			pair = pair+parseInt(die5.innerHTML);
		}
	}

	else if(die2.className=="Die CheckedDie")
	{
		pair = parseInt(die2.innerHTML);
	
		if(die3.className=="Die CheckedDie" && die3.innerHTML==pair)
		{
			pair = pair+parseInt(die3.innerHTML);
		}
		if(die4.className=="Die CheckedDie" && die4.innerHTML==pair)
		{
			pair = pair+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML==pair)
		{
			pair = pair+parseInt(die5.innerHTML);
		}
	}
	
	else if(die3.className=="Die CheckedDie")
	{
		pair = parseInt(die3.innerHTML);
	
		if(die4.className=="Die CheckedDie" && die4.innerHTML==pair)
		{
			pair = pair+parseInt(die4.innerHTML);
		}
		if(die5.className=="Die CheckedDie" && die5.innerHTML==pair)
		{
			pair = pair+parseInt(die5.innerHTML);
		}
	}
	
	else if(die4.className=="Die CheckedDie")
	{
		pair = parseInt(die4.innerHTML);
	
		if(die5.className=="Die CheckedDie" && die5.innerHTML==pair)
		{
			pair = pair+parseInt(die5.innerHTML);
		}
	}
	
	Check(onePairRow, pair);
	
}
function checkForTwoPair()
{
	var twoPairRow =10;
}
function checkForThreeOfAKind(){}
function checkForFourOfAKind(){}
function checkForLow(){}
function checkForHigh(){}
function checkForHouse(){}
function checkForChance(){}
function checkForYatzy(){}

function UpdateSum(currentPlayer)
{
	var row=7;
	var sum = GetPointsFromTable(currentPlayer);
	if(sum!=0)
	{
	addPointsToTable(sum,currentPlayer,row);
	}
}

function CheckForBonus(currentPlayer){	
	var bonusRow=8;
	if(GetPointsFromTable(currentPlayer)>=63)
	{
		addPointsToTable(bonuspoints,currentPlayer,bonusRow)
	}
}

//-- Work with Table


function GetPointsFromTable(currentPlayer)
{
	var sum =0;
	for(i=1;i<7;i++)
	{
		var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
			d = t.getElementsByTagName("tr")[i],
			r = d.getElementsByTagName("td")[currentPlayer];
			
			var pointNum=0;
			if(r.innerHTML!='<div class="tdScoreBoard" classname="tdScoreBoard"> </div>') //autogenerated so its all a innerHTML...
			{
				pointNum=parseInt(r.innerHTML);
			}
			sum=sum+pointNum;
	}
	return sum;
}

function GetPointsFromSingleRowInTable(currentPlayer, row)
{
	var points =0;

	var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
		d = t.getElementsByTagName("tr")[row],
		r = d.getElementsByTagName("td")[currentPlayer];
			
		if(r.innerHTML!='<div class="tdScoreBoard" classname="tdScoreBoard"> </div>') //autogenerated so its all a innerHTML...
		{
			points=parseInt(r.innerHTML);
		}

	return points;
}

function addPointsToTable(points, currentPlayer, row)
{
	var t = document.getElementById("scoreBoard"), // This have to be the ID of your table, not the tag
				d = t.getElementsByTagName("tr")[row],
				r = d.getElementsByTagName("td")[currentPlayer];
		
				r.innerHTML=points;
				
				r.style.backgroundColor="#70db70";
}


//--Create Table

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

// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}

