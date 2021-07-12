const { build, buildSync } = require('esbuild')

console.log({ argv: process.argv })

const isWatch = process.argv.includes('-watch')
// const command = isWatch ? build : buildSync

buildSync({
  entryPoints : [
    './index.ts',
  ],
  watch       : isWatch,
  bundle      : true,
  format      : 'cjs',
  platform    : 'browser',
  external    : [
    'react',
    'react-dom',
  ],
  outdir      : './dist',
})
