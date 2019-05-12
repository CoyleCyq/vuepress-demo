# querystring模块
querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具。 它可以使用以下方式访问：
```js
const querystring = require('querystring');
```
- [parse](parse) : `querystring.parse(str[, sep[, eq[, options]]])` 将 URL 查询字符串 str 解析为对象。
- [stringify](#stringify) : `querystring.stringify(obj[, sep[, eq[, options]]])` 将对象解析为字符串

## API
### escape
-  `querystring.escape(str)`  对给定的 str 执行 URL 百分比编码。

`querystring.escape()` 方法由` querystring.stringify()` 使用，通常不会直接使用。 它的导出主要是为了允许应用程序代码在必要时通过将 `querystring.escape` 指定给替代函数来提供替换的百分比编码实现。

### parse
- `querystring.parse(str[, sep[, eq[, options]]])` 将 URL 查询字符串 str 解析为对象。
    - `str <string>` 要解析的 URL 查询字符串。
    - `sep <string>` 用于在查询字符串中分隔键值对的子字符串。默认值: `'&'`。
    - `eq <string>` 用于在查询字符串中分隔键和值的子字符串。默认值: `'='`。
    - `options <object>` 其他配置见官方文档
    
```js
// 查询字符串 'foo=bar&abc=xyz&abc=123' 被解析为：
{
  foo: 'bar',
  abc: ['xyz', '123']
}
```

`querystring.parse() `方法返回的对象不是原型继承自 JavaScript Object。 这意味着典型的 Object 方法如 `obj.toString()`、`obj.hasOwnProperty()` 等都没有定义并且不起作用。

### stringify
- `querystring.stringify(obj[, sep[, eq[, options]]])`
    - `obj <Object>` 要序列化为 URL 查询字符串的对象。
    - `sep <string>` 用于在查询字符串中分隔键值对的子字符串。默认值: '&'。
    - `eq <string>` 用于在查询字符串中分隔键和值的子字符串。默认值: '='。
    - `options <object>` 其他配置见官方文档
    
```js
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// 返回 'foo:bar;baz:qux'
```
### unescape
- `querystring.unescape(str)`

querystring.unescape() 方法在给定的 str 上执行 URL 百分比编码字符的解码。

`uerystring.unescape()` 方法由` querystring.parse()` 使用，通常不会直接使用它。 它的导出主要是为了允许应用程序代码在必要时通过将 querystring.unescape 分配给替代函数来提供替换的解码实现。

默认情况下， querystring.unescape() 方法将尝试使用 JavaScript 内置的 decodeURIComponent() 方法进行解码。 如果失败，将使用更安全的不会丢失格式错误的 URL 的等价方法。