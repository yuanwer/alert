# alert.js & confirm.js

此插件提供统一的 UI，解决了不同浏览器中 alert 和 confirm 弹窗外观不一致的问题。

## 如何使用

将 lib 目录下的 alert 和 confirm 文件夹 📁 复制到你的项目中，在你需要使用的 html 中引入它们的 css 和 js。

下面是一个简单的例子，以 alert 为例：

1. 引入样式和脚本

```html
<!-- 引入alert.js的css和js -->
<link rel="stylesheet" href="lib/alert/alert.css" />
<script src="lib/alert/alert.js"></script>
```

2. 在需要的地方调用函数

```js
showAlert("欢迎登录", {
  title: "提示",
  okText: "确定",
  onOk: function () {
    // 确认按钮点击回调函数
    console.log("用户点击了确定");
    // 执行其他操作...
  },
});
// showAlert 和 showConfirm 方法都是非阻塞的，这意味着它不会阻止代码的执行
// 你可以继续执行其他代码，而不用等待 alert 弹窗关闭
```

<img src="./images/image.png" alt="Alt text" style="zoom:80%;" />

confirm 与 alert 用法一致，只是方法名和调用时的配置项不同。

## 配置项

以下是`showAlert`方法的参数文档：

| 参数           | 类型            | 描述                       |
| -------------- | --------------- | -------------------------- |
| message        | string          | 提示消息                   |
| options        | object          | 选项对象                   |
| options.title  | string (可选)   | 弹窗标题，默认为'提示'     |
| options.okText | string (可选)   | 确认按钮文本，默认为'确认' |
| options.onOk   | function (可选) | 点击确认按钮后的回调函数   |

以下是`showConfirm`方法的参数文档：

| 参数               | 类型     | 描述                       |
| ------------------ | -------- | -------------------------- |
| message            | string   | 提示信息                   |
| options            | object   | 选项对象                   |
| options.title      | string   | 确认框标题，默认为'提示'   |
| options.okText     | string   | 确认按钮文本，默认为'确认' |
| options.cancelText | string   | 取消按钮文本，默认为'取消' |
| options.onOk       | function | 确认按钮点击回调函数       |
| options.onCancel   | function | 取消按钮点击回调函数       |

## 遇到了问题

如果你在使用中遇到了问题 🙋，可以提交问题或通过邮箱 📪 联系我。

一些常见的问题及回答：

- 为什么我使用了`showAlert`或`showConfirm`方法，但是没有弹出弹窗？

  - 请检查是否在调用方法之前引入了样式和脚本文件。

- 为什么代码中使用了`var`而不是`let`或`const`？

  - 因为`var`是 ES5 的语法，它们对老旧浏览器支持更好，这也是使用回调函数而不是 Promise 的原因。

- 为什么使用新的命名，而不是覆盖原生的`alert`和`confirm`方法？

  - 因为它们是全局变量，可能会被其他库覆盖，而使用新的命名可以避免这个问题。同时，覆盖原生方法并不是一个好习惯。
