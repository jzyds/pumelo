#!/usr/bin/env bash

# 编译 src 目录下的 typescript source module
# 生成 js module 到 lib 目录
npm run build:tsc

# 编译 src 目录下的 typescript source module
# 通过 webpack 生成可供 <sript> 标签引用的单 js 文件到 dist 目录
npm run build:webpack

# 编译 src 目录下的 typescript source module
# 生成对应模块的文档到 doc 目录
npm run build:doc

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

git add .
git commit -m ${version}
echo ${version};
npm publish
git push origin master