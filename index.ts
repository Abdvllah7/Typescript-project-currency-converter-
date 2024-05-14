import {log} from "console";
import inquirer from "inquirer";

let currencyconverter ={
    "USD":{
        "USD":1,
        "EUR":0.92,
        "PKR":278
    },
    "EUR":{
        "USD":1.08,
        "EUR":1,
        "PKR":300
    },
    "PKR":{
        "USD":0.036,
        "EUR":0.033,
        "PKR":1
    },
}

// input command

const answer : {
    from:"USD" |"EUR" |"PKR",
    to: "USD" |"EUR" |"PKR",
    amount : number,
}   = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter Your Currency Which You Want To Convert?",
            type: "list",
            choices:["USD","EUR","PKR"]
        },
        {
            name: "to",
            message: "Select Which Currency You Like To Convert?",
            type: "list",
            choices:["USD","EUR","PKR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount In Number",
            type: "number",
            choices:["USD","EUR","PKR"]
        }
    ]
)

const {from,to,amount} = answer;

// conversion
if(from && to && amount){
    let result =currencyconverter[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`)
}else {
    console.log("invalid operator select")
}
