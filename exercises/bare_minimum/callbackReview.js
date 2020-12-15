/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
/* Alternative approach using readline and fs.createReadStream
  const readline = require('readline');
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    callback(line);
    rl.close();
    console.log(`Line from file: ${line}`);
  });
*/
  // TODO
  //read entire file
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
      callback(err, null);
    } else {
      let endlineIndex = fileData.indexOf('\n');
      if (endlineIndex > 0) {
        let firstLine = fileData.slice(0, endlineIndex);
        callback(null, firstLine);
      } else {
        callback(null, fileData);
      }
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {

  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
