"Use Strict"
function runGame(){
	let playerAndComputerLevels=setPlayerAndComputerLevels();
	let winGame=roundStart(playerAndComputerLevels);
function roundStart(){
	let roundsOfGame= alert("Ready to see if you can do the impossible!? Test your luck and see if you can win")
		let winGame = false;
			while (!winGame){
				let playerRoll=calculatePlayerDieNumber(playerAndComputerLevels);
				let computerRoll=calculateComputerDieNumber(playerAndComputerLevels);
					if (playerRoll>computerRoll){
								messageTheResults(playerRoll,computerRoll);
								playerAndComputerLevels=chooseWinningResponse(playerAndComputerLevels);
					}
					else if (playerRoll<computerRoll){
								messageTheResults(playerRoll,computerRoll);
								playerAndComputerLevels=calculateWinningComputerResponse(playerAndComputerLevels);
					}
					else {alert("Your attacks cancelled each other out!")
					}
					messageBaseOnLvls(playerAndComputerLevels);
					winGame=makeWinningCondition(playerAndComputerLevels,playerRoll,computerRoll);
					}
			}
function setPlayerAndComputerLevels(){
	let playerAndComputerLevels=[1,1];
	return playerAndComputerLevels
	} 
function makeWinningCondition(playerAndComputerLevels,playerRoll,computerRoll){
	let winningCondition = false;
		if (playerAndComputerLevels[0] === 5 && playerRoll > computerRoll){
			alert("Congradulations! You have become victorious! GG!");
			winningCondition = true;
		}
		else if (playerAndComputerLevels[1] === 5 && computerRoll > playerRoll){
			alert("Defeat!? You must try again and conquer your opponent!");
			winningCondition = true;
		}
	return winningCondition
	}
function chooseWinningResponse(playerAndComputerLevels){
			let playerWinningResponse = prompt("Type S to strengthen yourself or W to weaken your opponent.");
					switch (playerWinningResponse){
						case "S":
							alert("You have gained more strength to destroy the weak!");
							playerAndComputerLevels[0]++
							return playerAndComputerLevels
						case "W":
							if (computerLvl === 1){ alert("Your opponent can't be weakened anymore, you will continue to gain");
									playerAndComputerLevels[1]--
									return playerAndComputerLevels
							}
							else {
								alert("The opponent shall be weakened!");
									playerAndComputerLevels[0]++
									return playerAndComputerLevels
							}
						default:
							if (playerAndComputerLevels[0]>1){
								alert("Due to your inability to read, you have been weakened");
								playerAndComputerLevels[0]--
								return playerAndComputerLevels
							}
							else { alert("Your lack of reading shows that you have more brawns than brains. Strength+");
									playerAndComputerLevels[0]++
									return playerAndComputerLevels
							}
					}
			return playerWinningResponse
			}		
function calculateWinningComputerResponse(playerAndComputerLevels){
		let computerWinningResponse=(Math.floor(Math.random()*2)+1);
			if (computerWinningResponse === 1){
				alert("Your opponent is gaining more strength with this victory!");
				playerAndComputerLevels[1]++
				return playerAndComputerLevels
			}
			else if (computerWinningResponse === 2 && playerAndComputerLevels[0]===1){
				alert("Your opponent feels mercy for you and will just gain strength");
				playerAndComputerLevels[1]++
				return playerAndComputerLevels
			}
			else {alert("Your has chosen to weaken you!")
				playerAndComputerLevels[0]--
				return playerAndComputerLevels
			}
		return  computerWinningResponse;
		}
function messageTheResults(playerRoll,computerRoll){
	let playerRoundMessage;{
		if (playerRoll === computerRoll){
			alert("Your attacks cancelled each other! Try agian.");
		}
		else if (playerRoll>computerRoll){
			alert("Your attacks have bested your opponent!");
		}
		else if (playerRoll<computerRoll){
			alert("Your opponent's attacks were too powerful and defeated you");
		}
		return playerRoundMessage
	}
	}
function calculatePlayerLvlToDie(playerAndComputerLevels){
	let playerDieSize;{
		if (playerAndComputerLevels[0]===1){
			(playerDieSize=20);
		}
		else if (playerAndComputerLevels[0]===2){
			(playerDieSize=12);
		}
		else if (playerAndComputerLevels[0]===3){
			(playerDieSize=8);
		}
		else if (playerAndComputerLevels[0]===4){
			(playerDieSize=6);
		}
		else {playerDieSize=4};
		}
	return playerDieSize
	}
function calculatePlayerDieNumber(playerAndComputerLevels){
	let playerDieRoll= (Math.floor(Math.random()*calculatePlayerLvlToDie(playerAndComputerLevels))+1);{
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
function calculateComputerLvlToDie(playerAndComputerLevels){
	let computerDieSize;{
		if (playerAndComputerLevels[1]===1){
			(computerDieSize=20);
		}
		else if (playerAndComputerLevels[1]===2){
			(computerDieSize=12);
		}
		else if (playerAndComputerLevels[1]===3){
			(computerDieSize=8);
		}
		else if (playerAndComputerLevels[1]===4){
			(computerDieSize=6);
		}
		else {computerDieSize=4};
		}
	return computerDieSize
	}
function calculateComputerDieNumber(playerAndComputerLevels){	
	let computerDieRoll= (Math.floor(Math.random()*calculateComputerLvlToDie(playerAndComputerLevels))+1);{
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
function messageBaseOnLvls(playerAndComputerLevels){
	let lvlMessage= alert("Now for the next round!");
		if (playerAndComputerLevels[0]===playerAndComputerLevels[1]){
			alert("Your power is the same, best of luck!");
		}
		else if ((playerAndComputerLevels[0]+1)<playerAndComputerLevels[1]){
			alert ("You are inredibly weaker.... best of luck, you need it.");	
		}
		else if (playerAndComputerLevels[0]>(playerAndComputerLevels[1]+1)){
			alert ("You are incredibly stronger! Keep pushing to win.");
		}
		else if (playerAndComputerLevels[0]>(playerAndComputerLevels[1])){
			alert ("You are stronger than your opponent! Show your power!");
		}
		else if (playerAndComputerLevels[0]<playerAndComputerLevels[1]){
			alert ("You are weaker, but victory is still in your grasp.");
		}
		return lvlMessage
	}
}
runGame();
