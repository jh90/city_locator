const db = require('./database');
const City = require('./model');

class psql {
    static getSuggestions(value) {
        const cleanValue = value.replace('%20', ' ');
        const query = 'SELECT DISTINCT name FROM us_cities WHERE name ILIKE $1 LIMIT 5;';
        return db.map(query, [cleanValue], (row) => new City(row));
    }
    static getResults(value) {
        const cleanValue = value.replace('%20', ' ').concat(',');
        const query = 'SELECT DISTINCT name,state_short,state_long FROM us_cities WHERE name ILIKE $1 LIMIT 10;';
        return db.map(query, [cleanValue], (row) => new City(row));
    }
}

module.exports = psql;