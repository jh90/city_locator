class City {
    constructor ({ id, name, state_short, state_long, alias }) {
        this.id = id;
        this.name = name;
        this.state_short = state_short;
        this.state_long = state_long;
        this.alias = alias;
    }
}

module.exports = City;