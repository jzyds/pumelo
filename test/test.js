const pumelo = require('../lib');
const pumeloDom = require('../lib/dom');
const _n = require('../lib/node')

console.log(pumelo.timeFormatWithRule(Date.now(), "Y-M-D H:MM:S"));
// console.log(pumelo.hasEmojiInString("asdasdas实打实大所123🤔😕😒😒😑🤔🤔"))
// console.log(pumelo.hasEmojiInString("asdasdas实打实大所123"))
// console.log(pumelo.hasEmojiInString("🤔"))
// console.log(pumelo.calculateDifference(new Date() - new Date(1546315200000), 'cn'));
// console.log(pumelo.calculateDifference(631123200000, 'cn'));
// console.log(pumelo.checkStringType('http://192.168.6.6', 'URL_START_WITH_HTTP_OR_HTTPS'))

// console.log(pumeloDom.browserObj)
// console.log(_n.readRecursionFileList()('../src'))