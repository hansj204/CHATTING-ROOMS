const path = require("path");

module.exports = {
  outputDir: "../backend/public",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
      },
    },
  },
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3000/",
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
