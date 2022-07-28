// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var util = require('util');

// TODO: Create an array of questions for user input
const questions = [];

function userData(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your repository?",
            name: "Title",
        },
        {
            type: "input",
            message: "Describe your repository.",
            name: "Description",
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "Installation",
        },
        {
            type: "input",
            message: "Provide instructions and examples for use. provide screenshots aa needed.",
            name: "Usage",
        },
        {
            type: "input",
            message: "List your collaborators, if any, with links to their Github profiles. List any third-party assets that require attibution, including tutorials.",
            name: "Credits",
        },
        {   
            type: "list",
            message: "Which license would you like to use?",
            name: "License",
            choices: [
                "Apache",
                "IBM",
                "MIT",
                "Perl",
            ]
        },
        {
            type: "input",
            message: "If your project has features, list them here.",
            name: "Features",
        },
        {
            type: "input",
            message: "For contributions please follow these guidelines.",
            name: "Contributions",
        },
        {
            type: "input",
            message: "Provide examples of how to test your application here.",
            name: "Tests",
        },
        {
            type: "input",
            message: "Link your GitHub profie here.",
            name: "Profile",
        },
        {
            type: "input",
            message: "Input email here.",
            name: "Email",
        },
    ])
}
// TODO: Create a function to write README file
// build the same # $ function for each of the above sections from the readme

function generateReadMe(Answers){
    var profile = ("https://github.com/" + Answers.Github);
    return `
    # ${Answers.Title}
    ## ${Answers.Description}
    ## Table of Contents
    * [Description](#Description)
    ## ${Answers.Installation}
    ## ${Answers.Usage}
    ## ${Answers.Credits}
    ## ${Answers.License}
    ## ${Answers.badge === "Apache" ? "Apache" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : answers.badge === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : answers.badge === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
    ## ${Answers.Features}
    ## ${Answers.Contributions}
    ## ${Answers.Tests}
    ## Questions
    If you have any questions regarding the app please contavct me at: 
    - email: ${Answers.Email}
    - github: <${Profile}>`;
}
// function writeToFile(fileName, data) {}
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
// used to create the readme file based on user input
async function init() {
    console.log('ReadMe Generator log');
        try {
        const userAnswers = await userData();
        const createFile = generateReadMe(userAnswers);
         await writeFileAsync("README", createFile);
    }
};

 init();
    