const fs = require('fs');

module.exports = {
  // A terrible, terrible implementation of logging
  logToFile: (msg) => {
    let oldContent = '';
    try {
      oldContent = fs.readFileSync('/tmp/log', 'utf8');
    } catch(e) {}
    fs.writeFileSync('/tmp/log', oldContent + '\n' + msg);
  }
};
