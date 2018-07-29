const fs = require('fs');
const path = require('path');

module.exports = function () {
  const cssFiles = fs.readdirSync('../static/css');
  cssFiles.forEach((cssFile) => {
    if (cssFile.indexOf('.') === 0) return;
    let fileContent = fs.readFileSync(path.resolve('../static/css', cssFile), 'utf8');
    fileContent = fileContent
      .replace(/url\(static\//gi, 'url(../')
      .replace(/url\(\/static\//gi, 'url(../');
      fs.writeFileSync(path.resolve('../static/css', cssFile), fileContent);
  });
}
