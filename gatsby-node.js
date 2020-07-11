const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~scss": path.resolve(__dirname, "src/scss"),
        "~utilities": path.resolve(__dirname, "src/utilities"),
        "~components": path.resolve(__dirname, "src/components"),
        "~content": path.resolve(__dirname, "content"),
      }
    }
  });
};