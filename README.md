## G22 在线教学系统-前端

- 目前已经完成了简单的**登录和导航栏与路由**
- 大家可以去下载一个JB全家桶的WebStorm，我就是用WebStorm写的，感觉自动补全非常好用，比VScode开发效率要高

#### 运行

- 先clone到本地

```shell
cd g22_learning_in_zju
npm install
npm start
```

- 我的node.js版本是12.17.0，不知道存不存在版本兼容性的问题

#### 登录

- 目前的账号是admin，teacher，stu，ta，密码都是123，但我之前写的身份验证有问题，目前暂时还不能使用，先随便用着

#### 代码目录

src目录下这几个目录存放的代码文件

- staitc 里面就一张logo图片
- component 一些标题、页脚、菜单之类的组件
- MainPage 登录和主页面两个重要页面
- Pages 目录下是若干子页面，子页面对应的内容看子页面的目录名就行，子页面的开发主要就在这里进行

