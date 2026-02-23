import swc from "rollup-plugin-swc3";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-polyfill-node";

export default {
  input: "src/assets/js/main.js",
  strictDeprecations: true,
  output: {
    file: "public/dist/bundle.js",
    format: "iife",
    sourcemap: false,
    name: "mybundle",
  },
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    swc({
      minify: true,
      sourceMaps: true, // ensure SWC generates sourcemaps
      jsc: {
        target: "es2017",
        parser: {
          syntax: "ecmascript",
          jsx: true,
        },
      },
    }),
    json({
      compact: true, // minify JSON output
      preferConst: true, // use `const` instead of `var` for generated variables
    }),
    nodePolyfills(),
 
   
  ],
};
