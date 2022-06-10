// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        work: resolve(__dirname, "work.html"),
        blog: resolve(__dirname, "blog.html"),
        workDetail: resolve(__dirname, "detail.html"),
      },
    },
  },
});
