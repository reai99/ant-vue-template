const VueCliConfig = require("../common_lib/vue.cli.config");
const moduleConfig = new VueCliConfig({ rootPath: __dirname });

module.exports = moduleConfig.getConfig({
  // 配置ant design 主题样式
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "blue"
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    https: false,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      "/agent": {
        target: process.env.VUE_APP_ApiUrl, // 需要请求的地址
        changeOrigin: true, // 是否跨域
        ws: true,
        pathRewrite: {
          "^/agent": ""
        }
      }
    }
  }
});
