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
				
				if(die1.className != "CheckedDie") {
					var d1 = Math.floor(Math.random() * 6) + 1;
					die1.innerHTML = d1;
				}
				if(die2.className != "CheckedDie") {
					var d2 = Math.floor(Math.random() * 6) + 1;
					die2.innerHTML = d2;
				}
				if(die3.className != "CheckedDie") {
					var d3 = Math.floor(Math.random() * 6) + 1;
					die3.innerHTML = d3;
				}
				if(die4.className != "CheckedDie") {
					var d4 = Math.floor(Math.random() * 6) + 1;
					die4.innerHTML = d4;
				}
				if(die5.className != "CheckedDie") {
					var d5 = Math.floor(Math.random() * 6) + 1;
					die5.innerHTML = d5;
				}
			}
			
			/*var timeToShow = 0;
			
			function display() {
				timeToShow++;
				document.getElementById("time").innerHTML = timeToShow;
				window.setTimeout(display, 1000);
			}*/
			
			function checkDie(id){
				if(document.getElementById(id).className == "CheckedDie")
					document.getElementById(id).className = "UnCheckedDie";
				else if(document.getElementById(id).className == "UnCheckedDie")
					document.getElementById(id).className = "CheckedDie";
			}
