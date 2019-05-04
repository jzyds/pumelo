#!/usr/bin/env bash

version=$1;
jsonFile=package.json;
jsonContent=`cat package.json`

#sed -i.bak 's/\"(.*)\"/123/' a_.bak

node > ${jsonFile} <<EOF
//Read data
var data = ${jsonContent};

//Manipulate data
data.version = '${version}';

//Output data
console.log(JSON.stringify(data));

EOF

npm run build
node doc_generate.js
git add .
git commit -m ${version}
echo ${version};
npm publish
git push origin master