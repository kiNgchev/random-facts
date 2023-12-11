const FactDto = require("../dtos/FactDto");
const facts = require("../data.json")

module.exports = class FactController {
    get(req, res, next) {
        let fact = facts[Math.floor(Math.random() * facts.length)];
        return res.json(new FactDto(fact));
    }
}