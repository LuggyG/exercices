function numberGame(reader, min = 1, max = 10) {
  const numberToFind = (min = 1, max = 10) => Math.round(Math.random() * (max - min) + min);
  
  let goodNumber = numberToFind();
  const questionBase = () => {
    reader.question("-Trouve le nombre entre 1 et 10 \n", (playerChoice) => {
      if (playerChoice < 1 || playerChoice>10){
        console.log("OutOfRange\n\n____________");
        questionBase();
      }
      if (isNaN(playerChoice)){
        console.log("Un chiffre en numérique stp\n\n______________");
        questionBase();
      }
      if (playerChoice > goodNumber){
        console.log("Trop haut\n\n______________");
        questionBase();
      }
      if (playerChoice < goodNumber){
        console.log("Trop bas\n\n______________");
        questionBase();
      }
      if (playerChoice === goodNumber){
        console.log("Bien joué champion!!!!!!!!!\n\n");
      }
    });
  };

  questionBase();
}
module.exports = numberGame;
