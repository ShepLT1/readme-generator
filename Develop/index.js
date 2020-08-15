const fs = require("fs");
const inquirer = require("inquirer");
const mkdn = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the exact title of your project's Github repository?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a 1-2 sentence description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Which package manager is used to install your application (ex. npm, pip)?",
        name: "install"
    },
    {
        type: "input",
        message: "What does the user need to know about using your repository?",
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
        message: "What command should be used to run tests?",
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

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    })

}

inquirer
    .prompt(questions)
    .then(function(response) {

        let license = "MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

        if (response.license === "Apache") {
            license = "Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        } else if (response.license === "GPL") {
            license = "GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        }
        
        const mkdnFile = mkdn(response, license);

        writeToFile("readme.md", mkdnFile);
        
    })

// function to initialize program
function init() {

}

// function call to initialize program
init();
