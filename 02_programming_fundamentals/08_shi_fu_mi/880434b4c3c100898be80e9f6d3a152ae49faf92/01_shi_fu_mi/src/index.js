const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moves = {
  rock : [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],
  paper : [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  scissors : [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ]
};
console.log("Goodluck !");
Object.keys(moves).forEach((moveName, index) => {
  console.log(`${index + 1} - ${moveName}`);
});


const reverseLine = (line) => {
  const changedLine = line
    .split("")
    .map((char) => {
      if (char === ")") {
        return "(";
      } else if (char === "(") {
        return ")";
      }  
      return char;  
    })
    .join("");
  return changedLine.split("").reverse().join("");
};


reader.question("Select a move\n>", (playerMove) => {
  const index = parseInt(playerMove - 1);
  const move = Object.keys(moves)[index];
  const playerSymbol = moves[move];

  console.log(playerSymbol.join("\n"));


  // select move for AI 
  const aiIndex = Math.floor(Math.random()*3);
  const aiMove = Object.keys(moves)[aiIndex];
  const aiSymbol = moves[aiMove].map(reverseLine);
  // display the move 
  console.log(aiSymbol.join("\n"));

  // compare move 
  // 0 = pierre / 1 = feuille / 2 = ciseaux
  function compare(){
    if (index ==aiIndex){
      console.log("\n>> Egalité!");
    } else if (index == 0 && aiIndex== 1){
      console.log("\n>> Perdu :'( ");
    }else if (index == 0 && aiIndex== 2){
      console.log("\n>> Gagné !!");
    }else if (index == 1 && aiIndex== 0){
      console.log("\n>> Gagné! ");
    }else if (index == 1 && aiIndex== 2){
      console.log("\n>> Perdu :'( ");
    }else if (index == 2 && aiIndex== 0){
      console.log("\n>> Perdu!! ");
    }else if (index == 2 && aiIndex== 1){
      console.log("\n>> Gagné!! ");
    }
  }
  // display the winner 
  compare();
});