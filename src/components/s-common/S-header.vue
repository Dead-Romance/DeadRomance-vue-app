<template>
  <div class="header">
    <div class="S-header">
      <div id="left" @click="onClickLeft">
        <slot name="left">
          <i v-if="leftArrow" class="iconfont">&#xe63b;</i>
          <span v-if="leftText">{{leftText}}</span>
        </slot>
      </div>
      <div class="title">
        <slot name="title">
          <span v-if="title">{{title}}</span>
        </slot>
      </div>

      <div id="right" @click="onClickRight">
        <slot name="right" @click="onClickRight">
          <span v-if="rightText">{{rightText}}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String, // 标题
    leftText: String, // 左侧文字
    rightText: String, // 右侧文字
    leftArrow: {
      // 左侧图标 - 返回
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 左侧点击事件
    onClickLeft() {
      this.$emit("click-left");
    },
    //右侧点击事件
    onClickRight() {
      this.$emit("click-right");
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    next();
  }
};
</script>

<style lang="less">
.S-header {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  text-align: center;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  .left {
  }
  .title {
    flex: 1;
    span {
      color: #333;
      font-size: 16px;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.header {
  height: 45px;
  width: 100%;
}
</style>
