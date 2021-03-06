import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsConfigPaths from "vite-tsconfig-paths";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    tsConfigPaths()
  ],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      { find: "@api", replacement: resolve(__dirname, "./src/api") },
      { find: "@assets", replacement: resolve(__dirname, "./src/assets") },
      {
        find: "@component",
        replacement: resolve(__dirname, "./src/component")
      },
      { find: "@constant", replacement: resolve(__dirname, "./src/constant") },
      { find: "@hook", replacement: resolve(__dirname, "./src/hook") },
      { find: "@pages", replacement: resolve(__dirname, "./src/pages") },
      { find: "@route", replacement: resolve(__dirname, "./src/route") },
      { find: "@store", replacement: resolve(__dirname, "./src/store") },
      { find: "@util", replacement: resolve(__dirname, "./src/util") }
    ]
  },
  // optimizeDeps: {
  //   include: ['linked-dep']
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [/linked-dep/, /node_modules/]
  //   }
  // },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        ws: true
        // rewrite: path => path.replace(/^\/api/, "")
      }
      // with RegEx
      // "^/fallback/.*": {
      //   target: "http://localhost:8000",
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/fallback/, "")
      // }
    }
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import React from 'react'`
  }
});
