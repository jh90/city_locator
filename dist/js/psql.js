const db = require('./database');
const City = require('./model');

class psql {
    static suggest(input) {
        const queryText = 'SELECT DISTINCT name,state_short,state_long,alias FROM us_cities WHERE alias LIKE $1 LIMIT 10;';
        const queryValue = [`${input}%`];
        return db.map(queryText, queryValue, (row) => new City(row));
    }
}

module.exports = psql;