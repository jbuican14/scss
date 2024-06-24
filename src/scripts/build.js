const Fs = require('fs');
const Path = require('path');
const Sass = require('node-sass');

const result = Sass.renderSync({
  file: Path.resolve('src/global.scss'),
  includePaths: [Path.resolve('src')],
});

// deprecated
// const s = Sass.renderSync({
//   data: Fs.readFileSync(Path.resolve('src/global.scss')).toString(),
//   outputStyle: 'expanded',
//   outFile: 'global.css',
//   includePaths: [Path.resolve('src')],
// });

// console.log(result.css.toString());
Fs.writeFileSync(Path.resolve('src/lib/global.css'), result.css.toString());
