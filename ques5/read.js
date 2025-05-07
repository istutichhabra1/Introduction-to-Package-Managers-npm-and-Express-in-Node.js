
const fs = require('fs');
const path = require('path');


function readFileContent() {
  const filePath = path.join(__dirname, 'Data.txt');
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject('Error reading the file.');
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = { readFileContent };
