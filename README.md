# deadromance-vue-app

## 项目设置
##### 下载依赖包
```
yarn install
```

##### 运行

```
yarn run serve
```

##### 打包
```
yarn run build
```

##### 运行测试
```
yarn run test
```

##### 提示和修复文件
```
yarn run lint
```

### 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).

---------------------


## 目录结构

```
> node_modules						  // 依赖
> public								// 静态资源
∨ src
	> api							   // api
	> assets						
		> images
	> components					    // 组件文件
		> common						// 子组件目录
		> s-common						// 组件目录
	∨ css							   // css
		iconfont.css					// 字体图标css
		reset.css					   // 初始化css
	∨ routes						   // 路由
		> chilrenRoutes				 // 子路由文件
		  index.js					  // 路由入口
		  router.js					 // 路由配置
	∨ utils							 // 插件
		  http.js					   // http
		  rem.js					    // rem适配
		  S-component.js			    // 组件引入入口
	> views							 // 页面文件
	App.vue							 // App
	main.js							 // 入口
.gitignore
babel.config.js
package.json
READEM.md
vue.config.js						   // vue配置项
yarn.lock	
```

---------------------


## 组件

#### 头部组件
`S-Header`

##### 代码演示

```
<SHeader
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
```

##### 高级用法
> 通过插槽定制内容

```
<SHeader title="标题" left-text="返回" left-arrow>
	<span slot="right">内容</span>
</SHeader>
```

##### api
> Props

|  参数 |  说明 |  	类型 | 默认值  | 版本  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|  title | 标题  |  `String` | `""`  | -  |
|  left-text | 左侧文案  | `String`  | `""`  | -  |
|  right-text | 右侧文案  | `String`  | `""`  | -  |
|  left-arrow | 是否显示左侧箭头  | `Boolean`  | `false`  | -  |

> Slots

|  参数 |  说明 | 
| ------------ | ------------ |
|  title | 自定义标签  | 
|  left-text | 自定义左侧区域内容  | 
|  right-text | 自定义右侧区域内容  | 

> Events

|  事件名 |  说明 |  回调 | 
| ------------ | ------------ | ------------ | 
|  click-left | 点击左侧按钮时触发  |  - | 
|  click-right | 点击右侧按钮时触发  | -  | 

---------------------


#### 底部组件
`S-Footer`

##### 代码演示
```
<SFooter :tabindex="0" @click-tabBar="onClickTabBar"/>

export default {
  methods: {
    onClickTabBar() {
      Toast('触发当前点击标签栏');
    },
  }
}
```

##### 高级用法
> 通过插槽定制内容

```
<SFooter custom >
	<div>内容</div>
</SFooter>
```

##### api
> Props

|  参数 |  说明 |  	类型 | 默认值  | 版本  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|  tabIndex | 标签当前位置  |  `Number` | `0`  | -  |

> Slots

|  参数 |  说明 | 
| ------------ | ------------ |
|  custom | 自定义标签  | 

> Events

|  事件名 |  说明 |  回调 | 
| ------------ | ------------ | ------------ | 
|  click-tabBar | 点击当前标签触发  |  - | 


#### 容器组件
`S-Container`

##### 代码演示
```
<S-Container noFooter noHeader/>

```

##### api
> Props

|  参数 |  说明 |  	类型 | 默认值  | 版本  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|  noHeader | 取消头部还原头部距离  |  `Boolean` | `false`  | -  |
|  noFooter | 取消底部还原底部距离  |  `Boolean` | `false`  | -  |


---------------------
