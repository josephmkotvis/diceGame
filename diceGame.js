"Use Strictly"
function runEntireGame(){

function roundLvl1vs1(){
	let yourLvl1Roll=rollLvl1();
	let opLvl1Roll= rollLvl1();
		let win1vs1Roll=true;{
			if (yourLvl1Roll<opLvl1Roll){ 
				win1vs1Roll = false;{
					alert("You've been defeated!");{
						roundLvl1vs2()}
					}
			} 
			else if (yourLvl1Roll===opLvl1Roll){
				win1vs1Roll=false;{
					confirm("Your powers match! Try again?");{
						roundLvl1vs1()}
					}
			}
			else {
				alert("You're on to the next Level!");{
					wonToNextRound()}
				}
			}
		}
function roundLvl1vs2(){
	let yourLvl1Roll=rollLvl1();
	let opLvl2Roll= rollLvl2();
		let win1vs2Roll= true; {
			alert ("Your opponent is only stlightly stronger, prepare yourself!")
				if (yourLvl1Roll < opLvl2Roll){
					win1vs2Roll=false;{
						alert ("You've been defeated!");{
							roundLvl1vs3()
						}
					}
				}
				else { choiceAfterWinningLvl1vs2();
							}
			}	
		}
function choiceAfterWinningLvl1vs2(){
	let winningLvl1vs2Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
						switch (winningLvl1vs2Answer){
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
								(choiceAfterWinningLvl1vs2());
								break;
							}
						}
function roundLvl1vs3(){
	let yourLvl1Roll= rollLvl1();
	let opLvl3Roll = rollLvl3();
		let win1vs3Roll=true; {
			alert ("Your opponent is even stronger now, good luck!")
				if (yourLvl1Roll < opLvl3Roll){
					win1vs3Roll=false;{
						alert("You've been defeated!");{
							roundLvl1vs4()
						}
					}
				}
				else { choiceAfterWinningLvl1vs3();
				}
			}
		}
function choiceAfterWinningLvl1vs3(){
	let winninglvl1vs3Answer = prompt("You're on to the next level!","Type S to strengthen yourself or W to weaken your opponent.");
		switch (winninglvl1vs3Answer){
			case "S":
				alert("You will become stronger!");
				(wonToNextRound());
				break;
			case "W":
				alert("The opponent shall be weakened!");
				break;
			default:
				alert ("Either write S or W");
				(choiceAfterWinningLv1vs3);
				break;
		}
	}
function roundLvl1vs4(){
	let yourLvl1Roll=rollLvl1();
	let opLvl4Roll= rollLvl4();
		let win1vs4Roll= true; {
			alert ("Your opponent is even stronger, good luck!")
				if (yourLvl1Roll < opLvl4Roll){
					win1vs4Roll=false;{
						alert ("You've been defeated!");{
							roundLvl1vs5()
						}
					}
				}
				else { choiceAfterWinningLvl1vs4();
							}
			}	
		}
function choiceAfterWinningLvl1vs4(){
	let winningLvl1vs4Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
						switch (winningLvl1vs4Answer){
							case "S":
								alert("You will become stronger!");
								(wonToNextRound());
								break;
							case "W":
								alert("The opponent shall be weakened!");
								(roundLvl1vs3());
								break;
							default:
								alert ("Either write S or W");
								(choiceAfterWinningLvl1vs4());
								break;
							}
						}
function roundLvl1vs5(){
	let yourLvl1Roll=rollLvl1();
	let opLvl5Roll= rollLvl5();
		let win1vs5Roll= true; {
			alert ("Your opponent is only stlightly stronger, prepare yourself!")
				if (yourLvl1Roll < opLvl5Roll){
					win1vs5Roll=false;{
						alert ("You've been defeated!");{
							lostToNextRound()
						}
					}
				}
				else { choiceAfterWinningLvl1vs5();
							}
			}	
		}
function choiceAfterWinningLvl1vs5(){
	let winningLvl1vs5Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
						switch (winningLvl1vs5Answer){
							case "S":
								alert("You will become stronger!");
								(wonToNextRound());
								break;
							case "W":
								alert("The opponent shall be weakened!");
								(roundLvl1vs4());
								break;
							default:
								alert ("Either write S or W");
								(choiceAfterWinningLvl1vs5());
								break;
							}
						}
function roundLvl2vs1(){
	let yourLvl2Roll=rollLvl2();
	let opLvl1Roll=rollLvl1();
		let win2vs1Roll=true;{
			alert ("You are stronger now! Stay ahead while you can!")
				if (yourLvl2Roll<opLvl1Roll){
					win2vs1Roll=false;{
						alert("You've been defeated!");{
							decidingCompWin2vs1()
						}
					}
				}
				else alert("You have become victorious!");{
					wonToNextRound()
				}
		}
	}
function decidingCompWin2vs1(){
	let compWinningAnswer2vs1=(Math.floor(Math.random()*2)+1);
		if (compWinningAnswer=1){
			alert("Your opponent has chosen to weaken you!")
			(roundLvl1vs1())
		}
		else {
			alert("Your opponent has chosen to become stronger!")
			(roundLvl2vs2())
		}
	return compWinningAnswer2v1
	}
function roundLvl2vs2(){
	let yourLvl2Roll= rollLvl2();
	let opLvl2Roll= rollLvl2();
		let win2vs2Roll=true;{
			alert ("You are equal once again! Show your true power.")
				if (yourLvl2Roll<opLvl2Roll){
					win2vs2Roll=false;{
						alert("You've been defeated!");{
							decidingCompWin2vs2()
						}
					}
				}
				else {choiceAfterWinning2v2()
				}
		}
	}
function decidingCompWin2vs2(){
	let compWinningAnswer2vs2=(Math.floor(Math.random()*2)+1);
		if (compWinningAnswer2vs2=1){
			alert("Your opponent has chosen to weaken you!")
			(roundLvl1vs2())
		}
		else{
			alert("Your opponent has chosen to become stronger!")
			(roundLvl2vs3())
		}
	return compWinningAnswer2v2
	}
function choiceAfterWinningLvl2vs2(){
	let winninglvl2vs2Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
						switch (winningLvl2vs2Answer){
							case "S":
								alert("You will become stronger!");
								(wonToNextRound());
								break;
							case "W":
								alert("The opponent shall be weakened!");
								(roundLvl2vs1());
								break;
							default:
								alert ("Either write S or W");
								(choiceAfterWinningLvl2vs2());
								break;
							}
	}
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
	alert("need to make this function");
	}
roundLvl1vs1();
}
runEntireGame();