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