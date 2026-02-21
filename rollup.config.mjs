import swc from "rollup-plugin-swc3";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";


export default {
  input: "src/assets/js/main.js",
  strictDeprecations: true,
  output: {
    file: "public/dist/bundle.js",
    format: "esm",
    sourcemap: false   
  },
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    swc({
      minify: true,
      sourceMaps: true,   // ensure SWC generates sourcemaps
      jsc: {
        target: "es2022",
        parser: {
          syntax: "ecmascript",
          jsx: true
        }
      }
    })
  ]
};
