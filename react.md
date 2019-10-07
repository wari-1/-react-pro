####JSX 语法
在 js 文件内写 html 语法
如何在 html 内写 js,html 内的 js 语法都使用{}套上

######条件渲染

直接在 html 内使用 js 做判断即可

######列表渲染
将你的列表使用 map 方法转化成标签数组直接放到 html 内，自动会被渲染，注意要加 key 属性

######事件处理

如何绑定事件

1. 首先在组件的 class 内创建一个方法 handleClick
2. 使用标签的 onClick 属性绑定事件，例如<span onClick={this.handleClick}></span>

事件绑定如何传递参数

1. 事件绑定的必须是一个函数不能是函数调用
2. 要把你定义好的 handleClick 放到一个箭头函数内去执行并传参，然后该箭头函数绑定给标签的 onClick 属性。例如<span onClick={()=>{this.handleClick(argument)}}></span>
   **需要额外注意的就是 事件对象 event,这个对象必须是事件函数才有的**

######state

组件的状态，react 框架要求页面所有的变化需要和 state 有直接的关系

1. 如何定义
   在 class 内

```js
class Button extends Componets {
  state = {
    count: 0
  };
}
```

2. render 函数内获取 this.state
3. 修改 state 必须通过 setState 函数修改

######props
父子组件传递数据

1. 在父组件内直接给子组件自定义一个属性把想传递的数据当作属性值传递过去
   `<Button text='父组件的数据'>`
2. 在子组件内会有一个默认的 props 属性用来存储父组件传递过来的数据`this.props.text`
3. 可以通过 Button(组件名).defaultProps 设置 props 的默认值，还可以使用环境自带的 prop-types 包对 props 进行类型检查

```js
import PropTypes from "prop-types";
Btn.propTypes = {
  text: "默认值"
};
Btn.propTypes = {
  text: PropTypes.string
};
```

- render 函数在组件出现的时候和组件的 state 更新之后会触发

- 对 state 的计算，直接写到 render 函数内，但是一定要保证不能修改 state
- 对 state 的计算，直接写到 render 函数内，但是一定要保证不能修改 state

- 当组件没有自己的 state 时，一般写成无状态组件，只用来做展示用

- 一般父组件内的计算过程，无需写到子组件内，在父组件内计算完毕之后，再传递给子组件

- Router.js 中，路由必须包裹在 react-router-dom 中的一个组件下(BrowerRouter:仿浏览器历史记录 或 HashRouter :通过锚点跳转)

- 只有 Router 包裹的组件内才可以使用路由相关的东西(一个项目只能有一个 Router)

- 路由 path 的匹配规则是包含匹配

- 当路由地址改变的时候组件接收到的 props 发生了改变，此时 cdu 会执行，所以我们以之前的 props 和现在 props 作比较更新 state

###### react 路由

- 安装 npm i react-router-dom
- 路由中比较重要的组件 BrowerRouter | HashRouter) Route Link
  NavLink Redirect Switch Prompt 和 WithRouter 方法
  BrowerRouter 该组件是路由的包裹组件(凡是路由相关的东西必须有该组件包裹，他模拟的页面是完全仿浏览器历史记录的)
  Route 该组件就代表一个页面，当页面的地址和该组件的 path 匹配时，就展示该组件对应的 component
  Link NavLink 这两个组件就是用来做路由跳转的(组件的 to 属性)
- 自定义的组件如果被 Route 包裹了(写在了 Route 的 component 属性下)，那么该自定义组件会默认接受影响相关路由的 props (history location match)

###### react 组件的样式处理

一般来说我们直接创建对应的 css 文件，再导入到组件内，也可以在组件的 html 标签内写行内样式

1. 如何在 react 项目内使用 sass
   - 安装 `node-sass`
   - react 环境默认是支持 sass 语法的
   - 在组件内直接引入 sass 即可
2. 如何让组件的 css 私有化

   - 直接把组件的样式写在行内
   - 使用 styled-components 包解决
