// Dependencies
require('dotenv').config();
const { buildConnectionOptions, createConnection } = require('./config/dbConfig');

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
  

    const [departments] = await connection.execute('SELECT * FROM departments', []);
    console.table(departments);


}

main();
