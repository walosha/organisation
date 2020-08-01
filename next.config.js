// // next.config.js
// const withVideos = require("next-videos");

const path = require("path");
const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withVideos = require("next-videos");
const withImages = require("next-images");

module.exports = withPlugins([[withVideos], [withFonts], [withImages]], {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.modules.push(path.resolve("./"));

    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
});

module.exports = {
  // Target must be serverless
  target: "serverless",
};
