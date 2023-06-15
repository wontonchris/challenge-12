// Dependencies
require('dotenv').config();
const { buildConnectionOptions, createConnection } = require('./config/dbConfig');
const inquirer = require('inquirer'); 
const questions = require('./lib/questions');
const mysql = require('mysql2');

// const toLog = `
// EMPLOYEE TRACKER
// ${'='.repeat(20)}
// ${'='.repeat(20)}
// ${'='.repeat(20)}
// ${'='.repeat(20)}
// ${'='.repeat(20)}
// ${'='.repeat(20)}
// ${'='.repeat(20)}
// ${'='.repeat(20)}
// EMPLOYEE TRACKER
// `;



async function main() {
    const connection = await createConnection(buildConnectionOptions());

    

    // ask the user what they want to do
    const { menuOption } = await inquirer.prompt(questions[0]);
    console.log(menuOption);

    // switch statement to handle the user's choice


const [departments] = await connection.execute('SELECT * FROM departments', []);
console.log(departments);
}

   

main();
