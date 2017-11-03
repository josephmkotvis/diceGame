// "Use Strictly"

// function roundLvl1vs1(){
// 	let yourLvl1Roll=rollLvl1();
// 	let opLvl1Roll= rollLvl1();
// 		let win1vs1Roll=true;{
// 			if (yourLvl1Roll<opLvl1Roll){ 
// 				win1vs1Roll = false;{
// 					alert("You've been defeated!");{
// 						roundLvl1vs2()}
// 					}
// 			} 
// 			else if (yourLvl1Roll===opLvl1Roll){
// 				win1vs1Roll=false;{
// 					confirm("Your powers match! Try again?");{
// 						roundLvl1vs1()}
// 					}
// 			}
// 			else {
// 				alert("You're on to the next Level!");{
// 					wonToNextRound()}
// 				}
// 			}
// 		}
// function roundLvl1vs2(){
// 	let yourLvl1Roll=rollLvl1();
// 	let opLvl2Roll= rollLvl2();
// 		let win1vs2Roll= true; {
// 			alert ("Your opponent is only stlightly stronger, prepare yourself!")
// 				if (yourLvl1Roll < opLvl2Roll){
// 					win1vs2Roll=false;{
// 						alert ("You've been defeated!");{
// 							roundLvl1vs3()
// 						}
// 					}
// 				}
// 				else { choiceAfterWinningLvl1vs2();
// 							}
// 			}	
// 		}
// function choiceAfterWinningLvl1vs2(){
// 	let winningLvl1vs2Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
// 						switch (winningLvl1vs2Answer){
// 							case "S":
// 								alert("You will become stronger!");
// 								(wonToNextRound());
// 								break;
// 							case "W":
// 								alert("The opponent shall be weakened!");
// 								(roundLvl1vs1());
// 								break;
// 							default:
// 								alert ("Either write S or W");
// 								(choiceAfterWinningLvl1vs2());
// 								break;
// 							}
// 						}
// function roundLvl1vs3(){
// 	let yourLvl1Roll= rollLvl1();
// 	let opLvl3Roll = rollLvl3();
// 		let win1vs3Roll=true; {
// 			alert ("Your opponent is even stronger now, good luck!")
// 				if (yourLvl1Roll < opLvl3Roll){
// 					win1vs3Roll=false;{
// 						alert("You've been defeated!");{
// 							roundLvl1vs4()
// 						}
// 					}
// 				}
// 				else { choiceAfterWinningLvl1vs3();
// 				}
// 			}
// 		}
// function choiceAfterWinningLvl1vs3(){
// 	let winninglvl1vs3Answer = prompt("You're on to the next level!","Type S to strengthen yourself or W to weaken your opponent.");
// 		switch (winninglvl1vs3Answer){
// 			case "S":
// 				alert("You will become stronger!");
// 				(wonToNextRound());
// 				break;
// 			case "W":
// 				alert("The opponent shall be weakened!");
// 				break;
// 			default:
// 				alert ("Either write S or W");
// 				(choiceAfterWinningLv1vs3);
// 				break;
// 		}
// 	}
// function roundLvl1vs4(){
// 	let yourLvl1Roll=rollLvl1();
// 	let opLvl4Roll= rollLvl4();
// 		let win1vs4Roll= true; {
// 			alert ("Your opponent is even stronger, good luck!")
// 				if (yourLvl1Roll < opLvl4Roll){
// 					win1vs4Roll=false;{
// 						alert ("You've been defeated!");{
// 							roundLvl1vs5()
// 						}
// 					}
// 				}
// 				else { choiceAfterWinningLvl1vs4();
// 							}
// 			}	
// 		}
// function choiceAfterWinningLvl1vs4(){
// 	let winningLvl1vs4Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
// 						switch (winningLvl1vs4Answer){
// 							case "S":
// 								alert("You will become stronger!");
// 								(wonToNextRound());
// 								break;
// 							case "W":
// 								alert("The opponent shall be weakened!");
// 								(roundLvl1vs3());
// 								break;
// 							default:
// 								alert ("Either write S or W");
// 								(choiceAfterWinningLvl1vs4());
// 								break;
// 							}
// 						}
// function roundLvl1vs5(){
// 	let yourLvl1Roll=rollLvl1();
// 	let opLvl5Roll= rollLvl5();
// 		let win1vs5Roll= true; {
// 			alert ("Your opponent is only stlightly stronger, prepare yourself!")
// 				if (yourLvl1Roll < opLvl5Roll){
// 					win1vs5Roll=false;{
// 						alert ("You've been defeated!");{
// 							lostToNextRound()
// 						}
// 					}
// 				}
// 				else { choiceAfterWinningLvl1vs5();
// 							}
// 			}	
// 		}
// function choiceAfterWinningLvl1vs5(){
// 	let winningLvl1vs5Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
// 						switch (winningLvl1vs5Answer){
// 							case "S":
// 								alert("You will become stronger!");
// 								(wonToNextRound());
// 								break;
// 							case "W":
// 								alert("The opponent shall be weakened!");
// 								(roundLvl1vs4());
// 								break;
// 							default:
// 								alert ("Either write S or W");
// 								(choiceAfterWinningLvl1vs5());
// 								break;
// 							}
// 						}
// function roundLvl2vs1(){
// 	let yourLvl2Roll=rollLvl2();
// 	let opLvl1Roll=rollLvl1();
// 		let win2vs1Roll=true;{
// 			alert ("You are stronger now! Stay ahead while you can!")
// 				if (yourLvl2Roll<opLvl1Roll){
// 					win2vs1Roll=false;{
// 						alert("You've been defeated!");{
// 							decidingCompWin2vs1()
// 						}
// 					}
// 				}
// 				else alert("You have become victorious!");{
// 					wonToNextRound()
// 				}
// 		}
// 	}
// function decidingCompWin2vs1(){
// 	let compWinningAnswer2vs1=(Math.floor(Math.random()*2)+1);
// 		if (compWinningAnswer=1){
// 			alert("Your opponent has chosen to weaken you!")
// 			(roundLvl1vs1())
// 		}
// 		else {
// 			alert("Your opponent has chosen to become stronger!")
// 			(roundLvl2vs2())
// 		}
// 	return compWinningAnswer2v1
// 	}
// function roundLvl2vs2(){
// 	let yourLvl2Roll= rollLvl2();
// 	let opLvl2Roll= rollLvl2();
// 		let win2vs2Roll=true;{
// 			alert ("You are equal once again! Show your true power.")
// 				if (yourLvl2Roll<opLvl2Roll){
// 					win2vs2Roll=false;{
// 						alert("You've been defeated!");{
// 							decidingCompWin2vs2()
// 						}
// 					}
// 				}
// 				else {choiceAfterWinning2v2()
// 				}
// 		}
// 	}
// function decidingCompWin2vs2(){
// 	let compWinningAnswer2vs2=(Math.floor(Math.random()*2)+1);
// 		if (compWinningAnswer2vs2=1){
// 			alert("Your opponent has chosen to weaken you!")
// 			(roundLvl1vs2())
// 		}
// 		else{
// 			alert("Your opponent has chosen to become stronger!")
// 			(roundLvl2vs3())
// 		}
// 	return compWinningAnswer2v2
// 	}
// function choiceAfterWinningLvl2vs2(){
// 	let winninglvl2vs2Answer = prompt("You're on to the next level!", "Type S to strengthen yourself or W to weaken your opponent.");
// 						switch (winningLvl2vs2Answer){
// 							case "S":
// 								alert("You will become stronger!");
// 								(wonToNextRound());
// 								break;
// 							case "W":
// 								alert("The opponent shall be weakened!");
// 								(roundLvl2vs1());
// 								break;
// 							default:
// 								alert ("Either write S or W");
// 								(choiceAfterWinningLvl2vs2());
// 								break;
// 							}
// 	}
// function rollLvl1(){
// 	let d4 = (Math.floor(Math.random() * 4) + 1); {
// 				if (d4 === 2 || d4 === 3){
// 					(d4/=2);
// 				}
// 				else if (d4 === 1){
// 					(d4*=2);
// 				}
// 				else{
// 					(d4 ===d4);
// 				}
// 			return d4
// 			}
// 	}
// function rollLvl2(){
// 	let d6 = (Math.floor(Math.random() * 6) + 1); {
// 				}
// 				if (d6 === 2 || d6 === 3 || d6 === 5){
// 					(d6*=(.95/2));
// 				}
// 				else if (d6 === 1){
// 					(d6*=(.95*2));
// 				}
// 				else{
// 					(d6 *=.95);
// 				}
				
// 			return d6
// 			}
// function rollLvl3(){
// 	let d8 = (Math.floor(Math.random() * 8) + 1); {
// 				if (d8 === 2 || d8 === 3 || d8 === 5){
// 					(d8*=(.90/2));
// 				}
// 				else if (d8 === 1){
// 					(d8=(.90*2));
// 				}
// 				else {
// 					(d8 *=.90);
// 				}
// 			return d8
// 			}
// 	}
// function rollLvl4(){
// 	let d12 = (Math.floor(Math.random() * 12) + 1);
// 				if (d12 === 2 || d12 === 3 || d12 === 5 || d12 === 11){
// 					(d12*=(.85/2));
// 				}
// 				else if (d12 === 1 || d12 === 10){
// 					(d12*=(.85*2));
// 				}
// 				else {
// 					(d12 *=.85);
// 				}
				
// 			return d12
// 			}
// 	}
// function rollLvl5(){
// 	let d20 = (Math.floor(Math.random() * 20) + 1);
// 				if (d20 === 2 || d20 === 3 || d20 === 5 || d20 === 11 || d20 === 13 || d20 === 17){
// 					(d20*=(.80/2));
// 				}
// 				else if (d20 === 1 || d20 === 10 || d20 === 13){
// 					(d20*=(.80*2));
// 				}
// 				else {
// 					(d20 *=.80);
// 				}
				
// 			return d20
// 			}
// 	}	
// function lostToNextRoudnd(){
// 	alert("need to make this function");
// 	}
// function wonToNextRound(){
// 	alert("need to make this function");
// 	}
// function runEntireGame(){
// 	let playerLevel = 1;
// 	let computerLevel = 1;
// 	roundLvl1vs1();
// }
// runEntireGame();
function runEntireGame(){

function roundStart(){
	let playerLvl=1;
	let playerRoll=0;
	let computerLvl=1;
	let computerRoll=0;
	let roundsOfGame; {
		let winGame=makeWinningCondition(playerLvl,playerRoll,computerLvl,computerRoll)
			while (!winGame){
				let playerRoll=calculatePlayerDieNumber(playerLvl);
				let computerRoll=calculateComputerDieNumber(computerLvl);
					if (playerRoll>computerRoll){
					// changingWinningLevel(playerRoll,computerRoll,computerLvl,playerLvl);
					// changingWinningLevel;
					messageTheResults (playerRoll,computerRoll);
					chooseWinningResponse (computerLvl, playerLvl);
						if (chooseWinningResponse=2 && computerLvl>1){
							(computerLvl--)
						}
						else if (chooseWinningResponse=1){
							(playerLvl++)
						}
						else if (chooseWinningResponse=3){
							(playerLvl--)
						}	
					}
					else if (playerRoll<computerRoll){
					// changingLoosingLevel(playerRoll,computerRoll,computerLvl,playerLvl);
					// changingLoosingLevel;
					messageTheResults(playerRoll,computerRoll);
					calculateWinningComputerResponse(playerLvl);
						if (calculateWinningComputerResponse=2 && playerLvl>1){
							(playerLvl--)
						}
						else if (calculateWinningComputerResponse=1){
							(computerLvl++)
						}
					}
					else if (playerRoll===computerRoll){
					messageTheResults(playerRoll,computerRoll);
					}
			messageBaseOnLvls(playerLvl,computerLvl);
			}
		makeWinningCondition();
		}
	}
// function changingWinningLevel(playerRoll,computerRoll,computerLvl,playerLvl){
// 	let winningLevelChange = alert("The fight has begun!");{
// 					 messageTheResults (playerRoll,computerRoll);
// 					chooseWinningResponse (computerLvl);
// 						if (chooseWinningResponse=2 && computerLvl>1){
// 							(computerLvl--)
// 						}
// 						else if (chooseWinningResponse=1){
// 							(playerLvl++)
// 						}	
// 					return winningLevelChange
// 				}
// 			}
function makeWinningCondition(playerLvl,playerRoll,computerLvl,computerRoll){
	let winningCondition;{
		if (playerLvl === 5 && playerRoll > computerRoll){
			alert("Congradulations! You have become victorious! GG!")
		}
		else if (computerLvl === 5 && computerRoll > playerRoll){
			alert("Defeat!? You must try again and conquer your opponent!")
		}
	return winningCondition
	}
	}
function chooseWinningResponse(computerLvl, playerLvl){
	let yourWinningResponse;{
			if (computerLvl>1){ prompt("You're on to the next level!","Type S to strengthen yourself or W to weaken your opponent.");{
				switch (yourWinningResponse){
					case "S":
						alert("You will become stronger!");
						(yourWinningResponse=1);
						break;
					case "W":
						alert("The opponent shall be weakened!");
						(yourWinningResponse=2);
						break;
					default:
						if (playerLvl>1){
							alert ("Due to your inability to read, you have been weakened");
							(yourWinningResponse=3)
						}
						else {
							alert("With your lack of reading, you brawns must be stronger than your brains, Strength+");
							(yourWinningResponse=1)
						}
						
					}
				}
			}	
			else { alert("You have become stronger!");
					(yourWinningResponse=1);
			}
		}
	return yourWinningResponse
	}
// function changingLoosingLevel(playerRoll,computerRoll,computerLvl,playerLvl){
// 		let loosingLevelChange = alert("The fight has begun!");{
// 					messageTheResults(playerRoll,computerRoll);
// 					calculateWinningComputerResponse (playerLvl);
// 						if (calculateWinningComputerResponse=2 && playerLvl>1){
// 							(playerLvl--)
// 						}
// 						else if (calculateWinningComputerResponse=1){
// 							(computerLvl++)
// 						}
// 						return loosingLevelChange
// 					}
// 				}
function calculateWinningComputerResponse(playerLvl){
		let computerWinningResponse=(Math.floor(Math.random()*2)+1);
			if (computerWinningresponse=1 && playerLvl>1){
				alert("Your opponent has overpowered you and has chosen to weaken you!");
			}
			else {
				alert("Your opponent was stronger this time and has chosen to become even stronger!");
			}
		return computerWinningResponse
		}
function messageTheResults(playerRoll,computerRoll){
	let playerRoundMessage;{
		if (playerRoll===computerRoll){
			alert("Your attacks cancelled each other! Try agian.")
		}
		else if (playerRoll>computerRoll){
			alert("Your attacks have bested your opponent!")
		}
		else if (playerRoll<computerRoll){
			alert("Your opponent was stronger this time!")
		}
		return playerRoundMessage
	}
	}
function calculatePlayerLvlToDie(playerLvl){
	let playerDieSize;{
		if (playerLvl===1){
			(playerDieSize=20);
		}
		else if (playerLvl===2){
			(playerDieSize=12);
		}
		else if (playerLvl===3){
			(playerDieSize=8);
		}
		else if (playerLvl===4){
			(playerDieSize=6);
		}
		else {playerDieSize=4};
		}
	return playerDieSize
	}
function calculatePlayerDieNumber(playerLvl){
	let playerDieRoll= (Math.floor(Math.random()*calculatePlayerLvlToDie(playerLvl))+1);{
		if (playerDieRoll === 2 || playerDieRoll === 3 || playerDieRoll === 5 || playerDieRoll === 11 || playerDieRoll === 17){
					(playerDieRoll/=2);
				}
				else if (playerDieRoll === 1 || playerDieRoll === 10 || playerDieRoll === 19){
					(playerDieRoll*=2);
				}
				else {
					(playerDieRoll === playerDieRoll);
				}
			return playerDieRoll
			}
		}
function calculateComputerLvlToDie(computerLvl){
	let computerDieSize;{
		if (computerLvl===1){
			(computerDieSize=20);
		}
		else if (computerLvl===2){
			(computerDieSize=12);
		}
		else if (computerLvl===3){
			(computerDieSize=8);
		}
		else if (computerLvl===4){
			(computerDieSize=6);
		}
		else {computerDieSize=4};
		}
	return computerDieSize
	}
function calculateComputerDieNumber(computerLvl){	
	let computerDieRoll= (Math.floor(Math.random()*calculateComputerLvlToDie(computerLvl))+1);{
		if (computerDieRoll === 2 || computerDieRoll === 3 || computerDieRoll === 5 || computerDieRoll === 11 || computerDieRoll === 17){
					(computerDieRoll/=2);
				}
				else if (computerDieRoll === 1 || computerDieRoll === 10 || computerDieRoll === 19){
					(computerDieRoll*=2);
				}
				else {
					(computerDieRoll === computerDieRoll);
				}
			return computerDieRoll
			}
		}
function messageBaseOnLvls(playerLvl,computerLvl){
	let lvlAlert;{
		if (playerLvl===computerLvl){
			alert("Your power is the same, best of luck!")
		}
		else if (playerLvl>computerLvl){
			alert ("You are stronger! Show your power!")
		}
		else if (playerLvl>(computerLvl+1)){
			alert ("You are incredibly stronger! Keep pushing to win.")
		}
		else if (playerLvl<computerLvl){
			alert ("You are weaker, but victory is still in your grasp.")
		}
		else if ((playerLvl+1)<computerLvl){
			alert ("You are inredibly weaker.... best of luck, you need it.")		
		}
	}
	return lvlAlert
	}
	let yourWinningResponse=chooseWinningResponse();
	let computerWinningResponse= calculateWinningComputerResponse();
	let roundsOfGame=roundStart (yourWinningResponse,computerWinningresponse);
	// let winningLevelChange=changingWinningLevel(roundsOfGame);
	let winningCondition=makeWinningCondition(roundsOfGame);
	// let loosingLevelChange=changingLoosingLevel(roundsOf)
	let playerRoundMessage= messageTheResults(roundsOfGame);
	let playerDieSize= calculatePlayerLvlToDie(roundsOfGame);
	let playerDieRoll= calculatePlayerDieNumber(roundsOfGame);
	let computerDieSize= calculateComputerLvlToDie(roundsOfGame);
	let computerDieRoll= calculateComputerDieNumber(roundsOfGame);
	let lvlAlert=messageBaseOnLvls(roundsOfGame);
	}
runEntireGame();
