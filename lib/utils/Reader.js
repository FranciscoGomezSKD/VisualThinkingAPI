const fs = require("fs");
class Reader {
    static readJsonFile(file){
        const rawdata = fs.readFileSync(file);
        return JSON.parse(rawdata);
    }
}
  
module.exports = Reader;