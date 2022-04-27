const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, `../.env.test`),
});

const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT } = process.env;

// This asyncronous function will run before app
const dropDatabase = async () => {
  try {
    // connect to the database
    const db = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
    });

    // drop database
    // await db.query(`DROP DATABASE ${DB_NAME}`);
    // await db.close();
    await db.query(`DROP DATABASE ${DB_NAME}`, () => db.end());
  } catch (err) {
    // if something goes wrong, console.log the error and the current environment variables
    console.log(
      `Your environment variables might be wrong. Please double check .env file`
    );
    console.log('Environment Variables are:', {
      DB_PASSWORD,
      DB_NAME,
      DB_USER,
      DB_HOST,
      DB_PORT,
    });
    console.log(err);
  }
};

// run the async function
// dropDatabase();
