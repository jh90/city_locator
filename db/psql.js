const db = require('./database');
const City = require('./model');

class psql {
    static getCities(input) {
        const text = 'SELECT DISTINCT alias FROM us_cities WHERE alias LIKE $1 LIMIT 10;';
        const value = [`${input}%`];
        return db.map(text, value, (row) => new City(row));
    }
    static getStates(input) {
        const text = 'SELECT DISTINCT alias,state_short,state_long FROM us_cities WHERE alias=$1 LIMIT 10;';
        const value = [`${input}%`];
        return db.map(text, value, (row) => new City(row));
    }
}

module.exports = psql;