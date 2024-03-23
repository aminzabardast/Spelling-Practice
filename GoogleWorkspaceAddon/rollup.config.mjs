import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

export default {
  input: "src/main.ts",
  output: [
    {
      format: "cjs",
      file: "dist/main.js"
    }
  ],
  plugins: [
    commonjs(),
    nodeResolve({ modulesOnly: false }),
    typescript(),
    copy({
      targets: [
        { src: 'src/**/*.html', dest: 'dist/templates/' }
      ]
    })
  ],
  treeshake: false
}