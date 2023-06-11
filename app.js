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
  try {
    const connection = await createConnection(buildConnectionOptions());
    console.log(connection);

    const [rows, fields] = await connection.execute('SELECT * FROM departments', []);
    console.table(rows);

    connection.end();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
