"Use Strictly"
function roundLvl1vs1(){
	let yourLvl1Roll=rollLvl1();
	let opLvl1Roll= rollLvl1();
		let win1v1Roll=true;{
			if (yourLvl1Roll<opLvl1Roll){ 
				win1v1Roll = false;{
					alert("You've been defeated!");{
						roundLvl1vs2()}

					}
			} 
			else if (yourLvl1Roll===opLvl1Roll){
				win1v1Roll=false;{
					confirm("Your powers match! Try again?");{
						roundLvl1vs1()}
					}
			}
			else {
				alert("You're on to the next Level!");{
					wonToNextRound()}
				}
			}
function roundLvl1vs2(){
	let yourLvl1Roll=rollLvl1();
	let opLvl2Roll = rollLvl2();
		let win1v2Roll= true; {
			alert ("Your opponent is only stlightly stronger, prepare yourself!")
				if (yourLvl1Roll < opLvl2Roll){
					win1v2Roll=false;{
						alert ("You've been defeated!");{
							lostToNextRound()
						}
					}
				}
				else { choiceAfterWinningLvl1v2();
							}
			}	
		}
function choiceAfterWinningLvl1v2(){
	let winningLvl1v2Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
						switch (winningLvl1v2Answer){
							case "S":
								alert("You will become stronger!");
								(wonToNextRound());
								break;
							case "W":
								alert("The opponent shall be weakened!");
								(roundLvl1vs1());
								break;
							default:
								alert ("Either write S or W");
								(choiceAfterWinningLvl1v2());
								break;
							}
						}
// function rollLvl2v1(){

// }
// function rollLvl2v2(){

// }
// function rollLvl2v3(){

// }
// function rollLvl2v4(){

// }
// function rollLvl2v5(){

// }
// function rollLvl3v1(){

// }
// function rollLvl3v2(){

// }
// function rollLvl3v3(){

// }
// function rollLvl3v4(){

// }
// function rollLvl3v5(){

// }
// function rollLvl4v1(){

// }
// function rollLvl4v2(){

// }
// function rollLvl4v3(){

// }
// function rollLvl4v4(){

// }
// function rollLvl4v5(){

// }
// function rollLvl5v1(){

// }
// function rollLvl5v2(){

// }
// function rollLvl5v3(){

// }
// function rollLvl5v4(){

// }
// function rollLvl5v5(){

function rollLvl1(){ 
	let d4 = (Math.floor(Math.random() * 4) + 1); {
				if (d4 === 2 || d4 === 3){
					(d4/=2);
				}
				else if (d4 === 1){
					(d4*=2);
				}
				else{
					(d4 ===d4);
				}
			return d4
			}
	}
function rollLvl2(){
	let d6 = (Math.floor(Math.random() * 6) + 1); {
				}
				if (d6 === 2 || d6 === 3 || d6 === 5){
					(d6*=(.95/2));
				}
				else if (d6 === 1){
					(d6*=(.95*2));
				}
				else{
					(d6 *=.95);
				}
				
			return d6
			}
function rollLvl3(){
	let d8 = (Math.floor(Math.random() * 8) + 1); {
				if (d8 === 2 || d8 === 3 || d8 === 5){
					(d8*=(.90/2));
				}
				else if (d8 === 1){
					(d8=(.90*2));
				}
				else {
					(d8 *=.90);
				}
			return d8
			}
	}
function rollLvl4(){
	let d12 = (Math.floor(Math.random() * 12) + 1);{
				if (d12 === 2 || d12 === 3 || d12 === 5 || d12 === 11){
					(d12*=(.85/2));
				}
				else if (d12 === 1 || d12 === 10){
					(d12*=(.85*2));
				}
				else {
					(d12 *=.85);
				}
				
			return d12
			}
	}
function rollLvl5(){
	let d20 = (Math.floor(Math.random() * 20) + 1);{
				if (d20 === 2 || d20 === 3 || d20 === 5 || d20 === 11 || d20 === 13 || d20 === 17){
					(d20*=(.80/2));
				}
				else if (d20 === 1 || d20 === 10 || d20 === 13){
					(d20*=(.80*2));
				}
				else {
					(d20 *=.80);
				}
				
			return d20
			}
	}	

function lostToNextRound(){
	alert("need to make this function");
		}
function wonToNextRound(){
	alert("need to make this function")
}
}
roundLvl1vs1();