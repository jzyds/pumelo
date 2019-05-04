const jsdoc2md = require('jsdoc-to-markdown');
const fse = require('fs-extra');

jsdoc2md.render({files: "src/*.js"}).then(o => {
  fse.outputFile("./doc/doc.md", o).then(() => {
    console.log('Document generated');
  }).catch(err => {
    console.error(err)
  });
});
