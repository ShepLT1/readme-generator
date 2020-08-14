var fs = require("fs");
var inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a 1-2 sentence description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "How can a potential user install your application?",
        name: "install"
    },
    {
        type: "input",
        message: "What is your application's intended use?",
        name: "usage"
    },
    {
        type: "list",
        message: "Which license would you like to use?",
        name: "license",
        choices: ["MIT", "Apache", "GPL"]
    },
    {
        type: "input",
        message: "What contributions were made by yourself or others to complete this project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "Enter testing instructions to show how other developers can use your application.",
        name: "test"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

inquirer
    .prompt(questions);

// function to write README file
function writeToFile(fileName, data) {
    // generate links pertaining to all the sections and write them to file as table of contents, link them to spots on page like the 'back to top' links
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
