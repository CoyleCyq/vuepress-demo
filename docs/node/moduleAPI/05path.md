# path模块
path 模块提供用于处理文件路径和目录路径的实用工具。 它可以使用以下方式访问：

```js
const path = require('path');
```

## 常用API
- [format](#format) :  `path.format(pathObject)` 从对象返回路径字符串
- [join](#join) : `path.join([...paths])` 使用分隔符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
- [parse](#parse) : `path.parse(path)`返回一个对象，其属性表示 path 的重要元素
- [resolve](#resolve): `path.resolve([...paths])` 将路径或路径片段的序列解析为绝对路径。

## API

### 属性
##### 1. posix
- `path.posix` 提供对 path 方法的 POSIX 特定实现的访问。

```js
path.posix.basename('/tmp/myfile.html');
// 返回: 'myfile.html'
```

##### 2. win32
- `path.win32` 提供对特定于 Windows 的 path 方法的实现的访问。

```js
// 例如 
path.win32.basename('C:\\temp\\myfile.html');
// 返回: 'myfile.html'
```

##### 3. delimiter
- `path.delimiter` 提供平台特定的路径定界符
    - `;` 用于 Windows
    - `:` 用于 POSIX`

```js
// window
console.log(process.env.PATH);
// 打印: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

process.env.PATH.split(path.delimiter);
// 返回: ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
```

##### 4. sep
- `path.sep` 提供平台特定的路径片段分隔符
    - Windows 上是 `\`。
    - POSIX 上是 `/`

```js
// 在posix上：
'foo/bar/baz'.split(path.sep);
// 返回: ['foo', 'bar', 'baz']

// 在windows上
'foo\\bar\\baz'.split(path.sep);
// 返回: ['foo', 'bar', 'baz']
```
在 Windows 上，正斜杠（/）和反斜杠（\）都被接受为路径片段分隔符。 但是， path 方法只添加反斜杠（\）。

### 方法

##### 1. basename
- `path.basename(path[, ext])` 返回 path 的最后一部分

path.basename() 方法返回 path 的最后一部分，类似于 Unix 的 basename 命令。 尾部的目录分隔符将被忽略

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```
如果 path 不是字符串或者给定了 ext 且不是字符串，则抛出 TypeError。


##### 2. dirname
- `path.dirname(path)` 返回 path 的目录名

path.dirname() 方法返回 path 的目录名，类似于 Unix 的 dirname 命令。 尾部的目录分隔符将被忽略
```js
path.dirname('/foo/bar/baz/asdf/quux');
// 返回: '/foo/bar/baz/asdf'
```

##### 3. extname
- `path.extname(path)`

path.extname() 方法返回 path 的扩展名，从最后一次出现 `.（句点）`字符到 path 最后一部分的字符串结束。 如果在 path 的最后一部分中没有 . ，或者如果 path 的基本名称（参阅 path.basename()）的第一个字符是 .，则返回空字符串。

```js
path.extname('index.html');
// 返回: '.html'

path.extname('index.coffee.md');
// 返回: '.md'

path.extname('index.');
// 返回: '.'

path.extname('index');
// 返回: ''

path.extname('.index');
// 返回: ''
```
如果 path 不是字符串，则抛出 TypeError。

##### format
- `path.format(pathObject)` 从对象返回路径字符串

path.format() 方法从对象返回路径字符串。 与 path.parse() 相反。

在 POSIX 上：
```js

// 如果提供了 `dir`、 `root` 和 `base`，
// 则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。
path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
});
// 返回: '/home/user/dir/file.txt'

// 如果未指定 `dir`，则使用 `root`。 
// 如果只提供 `root`，或 'dir` 等于 `root`，则将不包括平台分隔符。 
// `ext` 将被忽略。
path.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
});
// 返回: '/file.txt'

// 如果未指定 `base`，则使用 `name` + `ext`。
path.format({
  root: '/',
  name: 'file',
  ext: '.txt'
});
// 返回: '/file.txt'
```

在window上
```js
path.format({
  dir: 'C:\\path\\dir',
  base: 'file.txt'
});
// 返回: 'C:\\path\\dir\\file.txt'
```

##### 5. isAbsolute
- `path.isAbsolute(path)` 检测 path 是否为绝对路径。

如果给定的 path 是零长度字符串，则返回 false。
```js
// 在posix上:
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('/baz/..');  // true
path.isAbsolute('qux/');     // false
path.isAbsolute('.');        // false


// 在windows上:
path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false
```
如果 path 不是字符串，则抛出 TypeError。

##### join
- `path.join([...paths])` 使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// 返回: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// 抛出 'TypeError: Path must be a string. Received {}'
```

##### 7. normalize
- `path.normalize(path)` 规范化给定的 path，解析 '..' 和 '.' 片段。

```js
// 在posix上：
path.normalize('/foo/bar//baz/asdf/quux/..');
// 返回: '/foo/bar/baz/asdf'


// 在windows上：
path.normalize('C:\\temp\\\\foo\\bar\\..\\');
// 返回: 'C:\\temp\\foo\\'
path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar');
// 返回: 'C:\\temp\\foo\\bar'
```

##### parse
- `path.parse(path)` 返回一个对象，其属性表示 path 的重要元素。 尾部的目录分隔符将被忽略

```js
// 在posix上：
path.parse('/home/user/dir/file.txt');
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// 在windows上：
path.parse('C:\\path\\dir\\file.txt');
// 返回:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
```

##### 9. relative 
- `path.relative(from, to)` 根据当前工作目录返回 from 到 to 的相对路径

如果将零长度的字符串传入 from 或 to，则使用当前工作目录代替该零长度的字符串。
```js
// 在posix上：
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'


// 在windows上：
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// 返回: '..\\..\\impl\\bbb'
```

##### resolve
- `path.resolve([...paths])` 将路径或路径片段的序列解析为绝对路径。

给定的路径序列从右到左进行处理，每个后续的 path 前置，直到构造出一个绝对路径。 例如，给定的路径片段序列：/foo、 /bar、 baz，调用 path.resolve('/foo', '/bar', 'baz') 将返回 /bar/baz。

```js
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

##### 11. toNamespacedPath
- `path.toNamespacedPath(path)`  返回给定 path 的等效名称空间前缀路径

仅在 Windows 系统上，返回给定 path 的等效名称空间前缀路径。 如果 path 不是字符串，则将返回 path 而不进行修改。

此方法仅在 Windows 系统上有意义。 在 POSIX 系统上，该方法不可操作，并且始终返回 path 而不进行修改。