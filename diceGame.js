"Use Strictly"
function runGame (){
	let d4 = rollLvl1();
	let d6 = rollLvl2();
	let d8 = rollLvl3();
	let d12 = rollLvl4();
	let d20 = rollLvl5();
	// let win1v1Roll = rollLvl1vs1(d4,);
function rollLvl1(){ 
	let d4 = (Math.floor(Math.random() * 4) + 1); {
				if (d4 === 2 || d4 === 3){
					(d4/=2);
				}
				else if (d4 === 1){
					(d4*=2);
				}
				else{
					(d4 ===d4)
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
function rollLvl1vs1(yourlvl1Roll, opLvl1Roll){
	let win1v1Roll=true
		if (yourLvl1Roll > opLvl1Roll){
			win1v1Roll === false
		} else if (yourLvl1Roll < opLvl1Roll) {
			win1v1Roll === true

		}
} 	
}
// function rollLvl1vs2(){

// }
// function rollLvl1vs3(){

// }
// function rollLvl1vs4(){

// }
// function rollLvl1v5(){

// }
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

// }
runGame();