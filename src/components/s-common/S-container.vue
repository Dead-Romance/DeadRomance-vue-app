<template>
  <div :class="{'SContainer':true, 'noHeader': noHeader, 'noFooter': noFooter}" ref="SContainer">
    <slot></slot>
  </div>
</template>


<script>
import iosScroll from "UTIL/iosScroll";
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
    // 解决ios上下滑动问题
    iosScroll(this.$refs.SContainer);
  },
  methods: {}
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