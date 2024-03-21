#! /usr/bin/env node
import inquirer from "inquirer"
const asnwer = await inquirer.prompt([
  { message: "Enter first numbar", type: "number", name: "firstnumber" },
  { message: "Enter second numbar", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perfome action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional statement


if (asnwer.operator === "Addition") {
  console.log(asnwer.firstnumber + asnwer.secondnumber);
} else if (asnwer.operator === "Subtraction") {
  console.log(asnwer.firstnumber - asnwer.secondnumber);
} else if (asnwer.operator === "Multiplication") {
  console.log(asnwer.firstnumber * asnwer.secondnumber);
} else if (asnwer.operator === "Division") {
  console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else{
    console.log("Please select valid operator")
}