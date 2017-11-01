"Use Strictly"
function runGame (){
let d4 = Math.floor(Math.random() * 4) + 1
let d6 = (Math.floor(Math.random() * 6) + 1) * .95
let d8 = (Math.floor(Math.random() * 8) + 1) * .90
let d12 = (Math.floor(Math.random() * 12) + 1) * .85
let d20 = (Math.floor(Math.random() * 20) + 1) * .825
console.log(d20);
}
runGame();