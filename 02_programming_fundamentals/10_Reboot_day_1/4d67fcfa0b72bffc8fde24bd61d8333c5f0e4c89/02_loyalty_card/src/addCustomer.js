import customerData from "./customerData.js";

let customer;

const getCustomerInfo = (R) => {
  R.question("first name", (firstName) => {
    R.question("last name", (lastName) => {
      customer.createCustomer({
        firstName,
        lastName,
        
      });
      
    });
  });
};

export default getCustomerInfo;