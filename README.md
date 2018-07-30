# Vienna4ever

## env
- node
- npm
- yarn
- git
- vscode (optional)

## lib
- framework7
  - http://framework7.io/
- vuejs
  - https://cn.vuejs.org/

## dev
- 在 gh-pages 分支下修改，完全不用管 master 分支
- dev 的 src 目录是页面的源码
- 图片等静态文件放在 dev/static 下
- 在 dev 下执行 ```npm run dev``` 可以本地预览，支持热更新 （这个是 framework7 的 demo 自带的配置文件里写的）
- 在 dev 下执行 ```npm run build``` 可以生成生产环境的文件，生成的文件在根目录下，包括 static 目录和 index.html 文件
- 在根目录提交代码，push
- 可能不会立刻更新

## tips
- 可以 ```npm install -g http-server && http-server``` 在本地起一个静态文件的 server
- 调试时，在 chrome 开发者工具的最左上角的第二个按钮，可以使用手机的浏览器来预览网页
