import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const folderNames = [null, "global", "pages", "assets"];
const pages = [null, "Landing", "Contact", "Register"];

const folderPaths = folderNames.reduce((acc, cur) => ({
  ...acc,
  [cur]: `/src/${cur}/`
}));

const pageImgPaths = pages.reduce((acc, cur) => ({
  ...acc,
  [`${cur.toLowerCase()}`]: `/src/pages/${cur}/img/`
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
  resolve: {
    alias: {
      ...folderPaths,
      ...pageImgPaths,
      "src": "/src/"
    }
  },
})
