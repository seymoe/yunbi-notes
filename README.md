# 芸笔

### 基于create-react-app, React+Redux构建的记事本类应用
### 在线预览地址：[芸笔](http://yunbi.txliang.com/)

别人老是推荐你写个todolist，是不是觉得听的疲劳了？那来写个记事本吧～

`git clone https://github.com/ximolang/yunbi-notes.git`

### `npm start`
启动预览

### `npm run build`
构建生产环境文件

### 使用gh-pages进行预览
若不存在gh-pages分支，则可以直接执行命令
```
git subtree push --prefix=build origin gh-pages
```
若存在，则可以在github上删掉此分支再执行上一条命令，其他的方式没踩过坑，这种方式暴力有效。