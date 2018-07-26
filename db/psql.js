const db = require('./database');
const City = require('./model');

class psql {
    static getSuggestions(value) {
        const query = 'SELECT DISTINCT alias FROM us_cities WHERE alias LIKE $1 LIMIT 10;';
        return db.map(query, [value], (row) => new City(row));
    }
    static getResults(value) {
        const query = 'SELECT DISTINCT alias,state_short,state_long FROM us_cities WHERE alias=$1 LIMIT 10;';
        return db.map(query, [value], (row) => new City(row));
    }
}

module.exports = psql;