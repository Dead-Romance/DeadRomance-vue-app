<template>
  <div class="S-footer">
    <slot></slot>
    <ul v-if="!custom">
      <li v-for="(item,index) in navBar" :key="index" @click="onClickTabBar">
        <img :src=" barIndex == index ? item.icon_active : item.icon" class="fot-icon" />
        <router-link :class="{'active': barIndex == index}" :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
    <slot v-if="custom"></slot>
  </div>
</template>

<script>
export default {
  props: {
    barIndex: {
      type: Number,
      default: 0
    },
    custom: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      navBar: [
        {
          path: "/",
          icon: require("ASSET/images/bottomBar/Yun.png"), 
          icon_active: require("ASSET/images/bottomBar/Yun_active.png"),
          name: "首页"
        },
        {
          path: "/Apple",
          icon: require("ASSET/images/bottomBar/Apple.png"), 
          icon_active: require("ASSET/images/bottomBar/Apple_active.png"),
          name: "分类"
        },
        {
          path: "/Android",
          icon: require("ASSET/images/bottomBar/Android.png"), 
          icon_active: require("ASSET/images/bottomBar/Android_active.png"),
          name: "购物车"
        },
         {
          path: "/Android",
          icon: require("ASSET/images/bottomBar/Android.png"), 
          icon_active: require("ASSET/images/bottomBar/Android_active.png"),
          name: "我的"
        },
      ]
    };
  },

  methods:{
    onClickTabBar() {
      this.$emit('click-tabBar')
    }
  }
};
</script>

<style lang="less" scoped>
.S-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  background: #eee;
  border-top: 1px solid #ccc;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      padding-top: 5px;
      .fot-icon {
        width: 30px;
        height: 30px;
      }
      a {
        color: #333;
        font-size: 10px;
        line-height: initial;
        -webkit-tap-highlight-color: transparent; // 谁知a标签选中背景为透明
      }
      .active {
        color: #07c160;
      }
    }
  }
}
</style>
