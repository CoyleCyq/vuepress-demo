# 查看文件内容
### 从头到尾显示
- `cat命令`
    - `-A`: 整合命令-vET
    - `-b`：列出行号，但是空白行不标志行号
    - `-E`：将结尾的断行字符($)显示出来
    - `-n`：列出行号，空白行也会标志行
    - `-T`：将tab按键以I显示
    - `-v`：列出一- 些看不来的特殊字符

```bash
# 查看ect目录下的passwd文件
$ cat /etc/passwd

# 查看ect目录下的passwd文件 加上行号显示 (包括空白行)
$ cat -n /etc/passwd
```
### 从尾到头的显示
- `tac命令`

```bash
# 查看ect目录下的passwd文件
$ tac /etc/passwd

# 查看ect目录下的passwd文件 加上行号显示 (包括空白行)
$ tac -n /etc/passwd
```
参数和`cat命令`一致

### 查看文件 `nl命令`
- `nl命令`
    - `-ba`: 无论是否有空行，都列出行号
    - `-bt`: 如果有空行，则不列出行号
    - `-nln`: 行号出现在屏幕最左方 
    - `-nrn`: 行号出现在屏幕最右方 
    - `-nrz`: 行号出现在屏幕最右方，前面加了几个0
    - `-w`: 缩进字符


### 查看文件 `more命令`
一页一页的查看

- `空格`：向下翻一页
- `回车`：向下翻一行
- `/字符串`： 搜索字符串
- `:f`:立刻显示文件名和一页多少行
- `b`: 翻到第一页
- `q`: 离开

### 查看文件 `less命令`

一页一页的查看

- `空格`：向下翻一页
- `pageDown`：向下翻一页
- `pageUp`: 向上翻一页
- `/字符串`： 搜索字符串 （有有高亮效果）
- `n`: 重复前一个搜索
- `N`: 反方向重复前一个搜索
- `q`: 离开


### 查看文件 `head,tail命令`
- `head命令`: ==显示头几行==，默认10行
- `tail命令`：==显示尾几行==，默认10行

备注： 参数一致 `-n` 行数

使用场景： 查看日志，因为一般日志只需要看尾几行就行了

```bash
# 显示头10行
$ head /etc/passwd

# 显示尾10行
$ tail /etc/passwd

# 显示头5行
$ head -n 5 /etc/passwd 

# 显示尾5行
$ tail -n 5 /etc/passwd 
```

### 查看文件的行数，数字，字节 `wc命令`

- `wc命令`： 显示文件的行数，数字，字节
    - `-c`: 只显示字节
    - `-w`: 只显示字数, 一个字被定义为由空白、空格或换行字符分隔的字符串。

    - `-l`: 只显示行
    
```bash
# 显示/etc/passwd文件的行数，数字，字节
$ wc /etc/passwd
> 43 87 2235 /etc/passwd # 43行 87个空格或换行字符，2235字节

# 显示/etc/passwd文件有多少行
$ wc -l /etc/passwd
> 43 /etc/passwd 
```

