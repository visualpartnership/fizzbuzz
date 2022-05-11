const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;


const test = Reader.readJsonFile("explorers.json");
const filteredRead = test.filter((filter) => filter.stacks.includes('javascript'))
console.log(filteredRead);
// const mapReader = test.map((mapper) => mapper.stacks)
// console.log(mapReader);