<template>
  <div :class="{'SContainer':true, 'noHeader': noHeader, 'noFooter': noFooter}" ref="SContainer">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "S-container",
  props: {
    noHeader: {
      type: Boolean,
      default: false
    },
    noFooter: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.isIos();
  },
  methods: {
    // 检测ios
    isIos() {
      const ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否为ios
      if (ios) {
          this.handleFiexdScroll()
      }
    },
    //   处理ios有fiexd上下滑不动问题
    handleFiexdScroll() {
      this.$refs.SContainer.addEventListener("scroll", function(e) {
        //   console.log(e);
        if (e.target.scrollTop <= 1.5) {
          e.target.scrollTop = 1.5;
        }
        if (
          e.target.scrollTop + e.target.clientHeight ==
          e.target.scrollHeight
        ) {
          e.target.scrollTop = e.target.scrollTop - 1.5;
        }
      });
    }
  }
};
</script>


<style lang="less">
.SContainer {
  position: fixed;
  top: 45px;
  bottom: 55px;
  left: 0;
  right: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.noHeader {
  top: 0;
}
.noFooter {
  bottom: 0;
}
</style>