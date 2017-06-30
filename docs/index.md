## Usage !heading

This package was develop as a helper to write a consistent ANTLR4 grammar to
convert `\uxxxx` representations to `\u{xxxxx}` ones, especially when dealing with regexp ranges such as `[\ud800][\udcab-\uddf0]`.

See [ecmascript-parser IdentifierName.g4](https://github.com/jlenoble/ecmascript-parser/blob/master/src/static/antlr4/grammars/IdentifierName.g4) lexer grammar for an actual output.

```js
import u16to32 from './path/to/u16to32';
import gulp from 'gulp';

u16to32('myfile.txt').pipe(gulp.dest('dir'));
```

## License !heading

u16to32 is [MIT licensed](./LICENSE).

© 2017 [Jason Lenoble](mailto:jason.lenoble@gmail.com)
