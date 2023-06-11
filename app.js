// Dependencies
require('dotenv').config();
const { buildConnectionOptions, createConnection } = require('./config/dbConfig');
const inquirer = require('inquirer'); 
const questions = require('./lib/questions');

const toLog = `
EMPLOYEE TRACKER
${'='.repeat(20)}
${'='.repeat(20)}
${'='.repeat(20)}
${'='.repeat(20)}
${'='.repeat(20)}
${'='.repeat(20)}
${'='.repeat(20)}
${'='.repeat(20)}
EMPLOYEE TRACKER
`;

async function main() {
    const connection = await createConnection(buildConnectionOptions());

// ask the user what they want to do
const {menuOption} = await inquirer.prompt(questions[0]);

    const {createPrompt} = inquirer;
    const prompt = createPrompt();
 }
  

    const [departments] = await connection.execute('SELECT * FROM departments', []);
    console.table(departments);


}

main();
