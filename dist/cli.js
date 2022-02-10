#!/usr/bin/env node
"use strict";var _createcreateapp = require('create-create-app');var _path = require('path');var r=_path.resolve.call(void 0, __dirname,"..","templates"),o=`
Your new template has been created!
Thanks for using alii/node-template

If this was useful, please give me a \u2B50\uFE0F
or consider supporting via GitHub sponsors
`;_createcreateapp.create.call(void 0, "create-node-template",{templateRoot:r,caveat:o,modifyName:e=>e.toLowerCase(),extra:{github:{type:"input",describe:"github username",prompt:"if-empty"}},after:async e=>{await e.run("yarn",{cwd:e.packageDir})}});
