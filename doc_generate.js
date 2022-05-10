const jsdoc2md = require("jsdoc-to-markdown");
const fse = require("fs-extra");

jsdoc2md
  .render({
    files: "lib/common/*.js",
  })
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
  .render({
    files: "lib/dom/*.js",
  })
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
  .render({
    files: "lib/node/*.js",
  })
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
