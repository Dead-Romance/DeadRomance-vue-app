<template>
  <div :class="SScrollClassObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    scroll: {
      type: String,
      default: ""
    },
  },

  computed: {
    SScrollClassObj: function() {
      let y = this.scroll.toLocaleLowerCase() == "y" ? true : false;
      let x = this.scroll.toLocaleLowerCase() == "x" ? true : false;

      return {
        "s-scroll-view-default": true,
        scrollY: y,
        scrollX: x
      };
    },
    // SScrollStyleObj: function() {
    //   return {
    //       height: this.height + 'px'
    //   };
    // }
  }
};
</script>

<style lang="less">
.s-scroll-view-default {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}
.scrollY {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.scrollX {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
}

</style>
