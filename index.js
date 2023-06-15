// Dependencies
require('dotenv').config();
const { buildConnectionOptions, createConnection } = require('./config/dbConfig');
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const mysql = require('mysql2');

async function main() {
    const connection = await createConnection(buildConnectionOptions());

    // ask the user what they want to do
    const { menuOption } = await inquirer.prompt(questions[0]);
    console.log(menuOption);

    const [departments] = await connection.execute('SELECT * FROM departments', []);
    const [roles] = await connection.execute('SELECT * FROM roles', []);
    const [employees] = await connection.execute('SELECT * FROM employees', []);
    console.log(departments);
}
main();

