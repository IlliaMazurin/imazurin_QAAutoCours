const fs = require ('fs');

module.exports = {
    fileReader(path) {
        return fs.readFileSync(path, 'utf8');
    },

    convertStringToArray(string) {
        return string.split("\n");
    }
}
