import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  format: 'cjs', // 'amd', 'cjs', 'es', 'iife', 'umd'
  dest: 'dist/sym.node.js',
  plugins: [ commonjs(), babel() ],
}
