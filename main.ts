#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import gradient from "gradient-string";
import { Add , Subtract , Multiply , Divide , Power } from "./operations.js"

(async() => {
    await showBanner("Calculator!", "Its used for Multiple Calculations!", "red", "blue");  
})();

async function Calculator() {
    let CalculatorFunctions = await inquirer.prompt([
        {
            message: chalk.bold.cyanBright.italic("Enter the first number:"),
            type: "number",
            name: "Num1",
            validate: (input: number) => {
                if (isNaN(input)) {
                    return "Enter a number please"
                }
                return true
            }
        },
        {
            message: chalk.bold.cyanBright.italic("Enter the next number:"),
            type: "number",
            name: "Num2",
            validate: (input: number) => {
                if (isNaN(input)) {
                    return "Enter a number please"
                }
                return true
            }
        },
        {
            message: chalk.bold.cyanBright.italic("Choose the operation:"),
            type: "list",
            choices: [`+`,`-`,`*`,`/`,`^`],
            name: "operation"
        }
    ])

    let { Num1 , Num2 , operation } = CalculatorFunctions;

    if (Num1 && Num2 && operation) {
        if (operation === "+") {
            console.log(gradient.summer(`${Num1} + ${Num2} = ${Add(Num1, Num2)}`));
            var again = await inquirer.prompt([
                {
                    name: "Again_",
                    type: "list",
                    choices: [`Yes`,`No`],
                    message: "Use The calculator again?"
                }
            ])
            let { Again_ } = again;

            Again_ === "Yes"
            ? Calculator()
            : process.exit();
        }
        else if (operation === "-") {
            console.log(gradient.summer(`${Num1} - ${Num2} = ${Subtract(Num1, Num2)}`));
            var again = await inquirer.prompt([
                {
                    name: "Again_",
                    type: "list",
                    choices: [`Yes`,`No`],
                    message: "Use The calculator again?"
                }
            ])
            let { Again_ } = again;

            Again_ === "Yes"
            ? Calculator()
            : process.exit();
        }
        else if (operation === "*") {
            console.log(gradient.summer(`${Num1} * ${Num2} = ${Multiply(Num1, Num2)}`));
            var again = await inquirer.prompt([
                {
                    name: "Again_",
                    type: "list",
                    choices: [`Yes`,`No`],
                    message: "Use The calculator again?"
                }
            ])
            let { Again_ } = again;

            Again_ === "Yes"
            ? Calculator()
            : process.exit();
        }
        else if (operation === "/") {
            console.log(gradient.summer(`${Num1} / ${Num2} = ${Divide(Num1, Num2)}`));
            var again = await inquirer.prompt([
                {
                    name: "Again_",
                    type: "list",
                    choices: [`Yes`,`No`],
                    message: "Use The calculator again?"
                }
            ])
            let { Again_ } = again;

            Again_ === "Yes"
            ? Calculator()
            : process.exit();
        } else {
            console.log(gradient.summer(`${Num1} ^ ${Num2} = ${Power(Num1, Num2)}`));
            var again = await inquirer.prompt([
                {
                    name: "Again_",
                    type: "list",
                    choices: [`Yes`,`No`],
                    message: "Use The calculator again?"
                }
            ])
            let { Again_ } = again;

            Again_ === "Yes"
            ? Calculator()
            : process.exit();
        }
    }
}

setTimeout(() => {
    Calculator();
}, 100);

