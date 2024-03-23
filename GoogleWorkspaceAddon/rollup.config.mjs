import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.js",
  output: [
    {
      format: "cjs",
      file: "dist/index.cjs.js",
    }
  ],
  plugins: [
    commonjs(),
    nodeResolve({ modulesOnly: false }),
  ],
  treeshake: false
};