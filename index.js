const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


const writeFileAsync = util.promisify(fs.writeFile);

function askUserQuestions() {
    return inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "What is the title of your application?"
        },

        {
            type: "input",
            name: "description",
            message: "Please provide a description of your application and what it was designed to do:"
        },

        {
          type: "input",
          name: "repository",
          message: "Please provide the link to your project's repository:"
        },

        {
          type: "input",
          name: "screenshot",
          message: "If you would like to include a screenshot to your README, please provide it now:"
        },

        {
          type: "input",
          name: "installation",
          message: "Briefly explain how to install your application, if necessary:"
        },

        {
          type: "input",
          name: "usage",
          message: "Explain how to use your application:"
        },

        {
          type: "input",
          name: "credits",
          message: "Please list the links of any contributors to your application:"
        },

        {
          type: "list",
          name: "licenses",
          message: "Please choose which license that you may like to apply to your application:",
          choices: [
            "The MIT License",
            "GNU GPL v3 License",
            "Apache 2.0 License"
          ]

        },

        {
          type: "input",
          name: "tests",
          message: "Please enter any test code you would like to include:"

        },

        {
          type: "input",
          name: "github",
          message: "What is your Github username?"
        },

        {
          type: "input",
          name: "email",
          message: "What email address would you like people to contact you with for questions?"


        }

    ]);
}

// function to initialize program
async function init() {
    console.log("Welcome!")
  try {
    const answers = await askUserQuestions();

    if (answers.licenses === "The MIT License") {

      answers.link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }

    if (answers.licenses === "GNU GPL v3 License") {

      answers.link = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }

    if (answers.licenses === "Apache 2.0 License") {

      answers.link = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }

    
    const markdown = generateMarkdown(answers);

    await writeFileAsync("README.md", markdown);

    console.log("You have successfully created your README.md");
  } catch(err) {
    console.log(err);
  }
}

// function call to initialize program
init();
