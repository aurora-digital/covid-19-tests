const { nextI18NextRewrites } = require("next-i18next/rewrites");
const localeSubpaths = {};

module.exports = {
  env: {
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  },
  distDir: "build",
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
