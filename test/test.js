const pumelo = require("../lib");
const pumeloDom = require("../lib/dom");
const _n = require("../lib/node");

console.log(pumelo.timeFormatWithRule(Date.now(), "Y-M-D H:m:S"));
console.log(pumelo.hasEmojiInString("asdasdas实打实大所123🤔😕😒😒😑🤔🤔"));
console.log(pumelo.hasEmojiInString("asdasdas实打实大所123"));
console.log(pumelo.hasEmojiInString("🤔"));
console.log(
  pumelo.calculateDifference(new Date() - new Date(1546315200000), "cn")
);
console.log(pumelo.calculateDifference(631123200000, "cn"));
console.log(
  pumelo.checkStringType("http://192.168.6.6", "URL_START_WITH_HTTP_OR_HTTPS")
);
console.log(
  pumelo.extractImages(`![alt text](image.jpg) 
    <img src="image1.jpg" alt="alt text 1" />
    <img src="image12.jpg" alt="alt text 12" />
    <img src="image143.jpg" alt="alt text 13" />
    <img src="image14.jpg" alt="alt text 14" />
    <img alt="alt text 2" src="image2.jpg" />`
  )
);
console.log(pumeloDom);
console.log(_n.readRecursionFileList()("./src"));
