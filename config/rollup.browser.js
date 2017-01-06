import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  format: 'iife',
  dest: 'dist/sym.js',
  plugins: [ babel() ],
  moduleName: 'Sym',
}
