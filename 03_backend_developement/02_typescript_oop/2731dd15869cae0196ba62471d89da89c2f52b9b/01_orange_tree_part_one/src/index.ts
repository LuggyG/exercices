abstract class Tree { 
  age : number= 0;
  height : number= 0; 
  alive : boolean = true; //param par défaut

  constructor(age: number){ // age? donne la possibilité de rendre undefined mais doit mettre une condition pour le sortir de cet état 
    this.age = age;
    if (age<10){
    this.height = 25*age;
    } else if (age>21){
      this.height = 10*age 
    }
  }
  abstract ageOneYear(): void; 

  abstract isAlive(): boolean;

  seed(): void{
    this.age = 0;
    this.height = 0;
    this.alive = true 
  }

}

export {Tree};

//const tree = new Tree()