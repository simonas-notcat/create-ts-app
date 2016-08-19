// Copyright 2004-present Facebook. All Rights Reserved.

const babelDev = require('../babel.dev');
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer(babelDev);

const tsc = require('typescript');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(
        src,
        {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React,
          target: tsc.ScriptTarget.ES6
        },
        path,
        []
      );
    }
    return src;
  },
};