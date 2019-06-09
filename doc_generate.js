const jsdoc2md = require('jsdoc-to-markdown');
const fse = require('fs-extra');

jsdoc2md.render({files: "src/common/*.js"}).then(o => {
  fse.outputFile("./doc/common.md", o).then(() => {
    console.log('Document generated');
  }).catch(err => {
    console.error(err)
  });
});

jsdoc2md.render({files: "src/dom/*.js"}).then(o => {
  fse.outputFile("./doc/dom.md", o).then(() => {
    console.log('Document generated');
  }).catch(err => {
    console.error(err)
  });
});