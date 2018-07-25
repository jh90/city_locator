const pgp = require('pg-promise')();

const connectionURL = 'postgres://MacUser:@localhost:5432/DAIX';
const db = pgp(connectionURL);

module.exports = db;