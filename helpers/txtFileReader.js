const Helper = require('@codeceptjs/helper');

class TxtFileReader extends Helper {

  readerFile() {
    return fs.readFile('./input/idProduct.txt', 'utf8');
  }

  convertStringToArray(string) {
    return string.split("\r\n");
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = TxtFileReader;
