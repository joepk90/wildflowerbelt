const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~scss": path.resolve(__dirname, "src/scss"),
        "~components": path.resolve(__dirname, "src/components")
      }
    }
  });
};