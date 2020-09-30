import { rl } from "./reader";

function ask(question: string, reader = rl): Promise<string> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    reader.question(question, (input) => {
      if (input !== "") {
        resolve("user input");
      } else if (input === "") {
        reject("Invalid input");
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
