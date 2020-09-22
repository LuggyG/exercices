import readline from "readline";
import customerData from "./customerData.js";
import getCustomerInfo from "./addCustomer.js";
import quit from "./quit.js";



const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let R = reader;
//Choix à l'index
reader.question(
  "Welcome\n ********************************************************\n\n1 - Add new customer\n2 - Access customer data\n3 - Quit\n\n🤖 Choose an action\n> ",
  (menuIndex) => {
    if (menuIndex === "1") {
      getCustomerInfo(R);
    } else if (menuIndex === "2") {
      customerData();
    } else if (menuIndex === "3") {
      reader.close();
    }
    else { console.log({ menuIndex }) }
  },
);
