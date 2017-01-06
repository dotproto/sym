import uglify from 'rollup-plugin-uglify'
import settings from './rollup.browser'

settings.plugins.push(uglify())
settings.dest = 'dist/sym.min.js'

export default settings
