const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    config.resolve.alias
      .set("@", path.join(__dirname, "./src"));
  },
  configureWebpack: {
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/css/global.scss")]
    }
  }
}