"Use Strictly"
function runGame (){
	// let d4 = rollLvl1();
	let d6 = rollLvl2();
	let d8 = rollLvl3();
	let d12 = rollLvl4();
	let d20 = rollLvl5();
	// let win1v1Roll = rollLvl1vs1(d4,);
// function rollLvl1(){ 
// 	switch(d4){
// 				case '2,3':
// 					((Math.floor(Math.random() * 4) + 1)/2)
// 					break;
// 				case '1':
// 					((Math.floor(Math.random() * 4) + 1)*2)
// 					break;
// 				default:
// 					(Math.floor(Math.random() * 4) + 1)
// 	return d4
// }
function rollLvl2(){
	let d6 = (Math.floor(Math.random() * 6) + 1)
			for (i=d6; i!==i; i++)
				if (i === 2,3,5){
					((i*.95)/2)
				}
				else if (i === 1){
					((i*.95)*2)
				}
				else if (i === 4,6){
					(i*.95)
				}
			return d6
}
function rollLvl3(){
	let d8 = (Math.floor(Math.random() * 8) + 1) * .90
	return d8
}
function rollLvl4(){
	let d12 = (Math.floor(Math.random() * 12) + 1) * .85
	return d12
}
function rollLvl5(){
	let d20 = (Math.floor(Math.random() * 20) + 1) * .825
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