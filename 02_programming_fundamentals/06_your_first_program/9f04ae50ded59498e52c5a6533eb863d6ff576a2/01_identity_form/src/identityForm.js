const identityForm = (reader) => {
  let userAnswer = {
    firstName: null,
    lastName: null,
    age: null,
  };

  reader.question("Quel est ton prénom?", (firstName) => {
    userAnswer.firstName = firstName;

    reader.question("Quel est ton nom?", (lastName) => {
      userAnswer.lastName = lastName;

      reader.question("Quel est ton age?", (age) => {
        userAnswer.age = age;

        console.log(`Your name is ${userAnswer.firstName} ${userAnswer.lastName} and you are ${userAnswer.age}`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;