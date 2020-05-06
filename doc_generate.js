const jsdoc2md = require("jsdoc-to-markdown");
const fse = require("fs-extra");

/**
 * document TypeScript
 * https://github.com/jsdoc2md/jsdoc-to-markdown/wiki/How-to-document-TypeScript
 */

jsdoc2md
  .render({ files: "src/common/*.ts", configure: "./jsdoc2md.json" })
  .then((o) => {
    fse
      .outputFile("./doc/common.md", o)
      .then(() => {
        console.log("Document generated");
      })
      .catch((err) => {
        console.error(err);
      });
  });

jsdoc2md
  .render({ files: "src/dom/*.ts", configure: "./jsdoc2md.json" })
  .then((o) => {
    fse
      .outputFile("./doc/dom.md", o)
      .then(() => {
        console.log("Document generated");
      })
      .catch((err) => {
        console.error(err);
      });
  });

jsdoc2md
  .render({ files: "src/node/*.ts", configure: "./jsdoc2md.json" })
  .then((o) => {
    fse
      .outputFile("./doc/node.md", o)
      .then(() => {
        console.log("Document generated");
      })
      .catch((err) => {
        console.error(err);
      });
  });
