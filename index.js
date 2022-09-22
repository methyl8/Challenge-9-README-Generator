// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const genMd = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "projectTitle",
      message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project:"
    },
    {
      type: "input",
      name: "installation",
      message: "Enter any installation instructions:",
      default: "npm i"
    },
    {
      type: "input",
      name: "usage",
      message: "Enter the usage information for your project:"
    },
    {
      type: "input",
      name: "contributions",
      message: "Enter the contribution guidelines for your project:"
    },
    {
      type: "input",
      name: "test",
      message: "Enter the test instructions for your project:"
    },
    {
      type: "list",
      name: "license",
      choices: ["Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 'Simplified' License",
      "BSD 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense"]
    },
    {
      type: "input",
      name: "profile",
      message: "Enter your GitHub name:"
    },
    {
      type: "input",
      name: "email",
      message: "Enter your contact email:",
      default: "No email contact, please."
    }
];
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile("./README.md",genMd(answers), (err) => 
    {
      if(err) {console.error(err)}
    })
  })
}

// Function call to initialize app
init();
