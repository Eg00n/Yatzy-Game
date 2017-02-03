			function ShowGameDiv(){
				document.getElementById("divGame").style.display = "block";
				document.getElementById("divMenu").style.display = "none"; 
			}
			
			function ShowHighScoreDiv(){
				document.getElementById("divMenu").style.display = "none"; 
			}

			function ShowLoginDiv(){
				document.getElementById("divMenu").style.display = "none"; 
			}

			function RollDice(){
				var die1 = document.getElementById("die1");
				var die2 = document.getElementById("die2");
				var die3 = document.getElementById("die3");
				var die4 = document.getElementById("die4");
				var die5 = document.getElementById("die5");
				
				var d1 = Math.floor(Math.random() * 6) + 1;
				var d2 = Math.floor(Math.random()*6)+1;
				var d3 = Math.floor(Math.random()*6)+1;
				var d4 = Math.floor(Math.random()*6)+1;
				var d5 = Math.floor(Math.random()*6)+1;
				
				die1.innerHTML = d1;
				die2.innerHTML = d2;
				die3.innerHTML = d3;
				die4.innerHTML = d4;
				die5.innerHTML = d5;
			}
			
			var timeToShow = 0;
			
			function display() {
				timeToShow++;
				document.getElementById("time").innerHTML = timeToShow;
				window.setTimeout(display, 1000);
			}
			
			function Check(){
				var die = document.getElementByClassName("Dice");			
				
				if(die.checked==false)
				{die.checked = true;}
				if(die.checked==true)
				{die.checked = false;}
			}
