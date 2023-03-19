 const path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },
  outputDir: path.resolve(__dirname, "docs"),
  publicPath: process.env.NODE_ENV ==='production'?"/portfolio/": "/",
};
