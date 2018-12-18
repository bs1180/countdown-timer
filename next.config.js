const withTypescript = require("@zeit/next-typescript");
const webpack = require("webpack");

module.exports = withTypescript({
  webpack: config => {
    const { plugins } = config;
    return {
      ...config,
      plugins: [
        ...(plugins || []),
        new webpack.ProvidePlugin({
          Emotion: "@emotion/core"
        })
      ]
    };
  }
});
