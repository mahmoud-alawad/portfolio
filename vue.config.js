
const path = require("path");

module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  outputDir: path.resolve(__dirname, "docs"),
  publicPath: process.env.NODE_ENV ==='production'?"/portfolio/": "/",
  
};
