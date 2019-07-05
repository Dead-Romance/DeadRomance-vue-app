<template>
  <div id="app">
    <div ref="SContainer" class="SContainer">
      <router-view />
    </div>
  </div>
</template>
<script>
// import vScroll from "./utils/v-scroll.js";

export default {
  data() {
    return {};
  },
  mounted() {
    //   document.documentElement.addEventListener(
    //     "touchstart",
    //     function(event) {
    //       if (event.touches.length > 1) {
    //         event.preventDefault();
    //       }
    //     },
    //     false
    //   );
    //   var lastTouchEnd = 0;
    //   document.documentElement.addEventListener(
    //     "touchend",
    //     function(event) {
    //       var now = Date.now();
    //       console.log(now - lastTouchEnd);
    //       if (now - lastTouchEnd <= 300) {
    //         event.preventDefault();
    //       }
    //       lastTouchEnd = now;
    //     },
    //     false
    //   );
  }

  // mounted() {
  //   this.isIosStopScroll();

  //   document.documentElement.addEventListener(
  //     "touchstart",
  //     function(event) {
  //       if (event.touches.length > 1) {
  //         event.preventDefault();
  //       }
  //     },
  //     false
  //   );
  // },
  // methods: {
  //   //解决ios橡皮筋问题
  //   iosTrouchFn(el) {
  //     //el需要滑动的元素
  //     el.addEventListener("touchmove", function(e) {
  //       e.isSCROLL = true;
  //     });
  //     document.body.addEventListener(
  //       "touchmove",
  //       function(e) {
  //         if (!e.isSCROLL) {
  //           e.preventDefault(); //阻止默认事件(上下滑动)
  //         } else {
  //           //需要滑动的区域
  //           var top = el.scrollTop; //对象最顶端和窗口最顶端之间的距离
  //           var scrollH = el.scrollHeight; //含滚动内容的元素大小
  //           var offsetH = el.offsetHeight; //网页可见区域高
  //           var cScroll = top + offsetH; //当前滚动的距离
  //           //被滑动到最上方和最下方的时候
  //           if (top == 0) {
  //             el.scrollTop = 2; //0～1之间的小数会被当成0
  //           } else if (cScroll === scrollH) {
  //             el.scrollTop = top - 2;
  //           }
  //         }
  //       },
  //       { passive: false }
  //     ); //passive防止阻止默认事件不生效
  //   },
  //   isIosStopScroll() {
  //     const ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否为ios
  //     if (ios) {
  //       alert(ios);
  //       let divEl = this.$refs.SContainer; //这是你需要定义的容器，这个容器里滑动正常，出了这个容器，页面的橡皮筋效果就被禁用掉了
  //       this.iosTrouchFn(divEl);
  //     }
  //   }
  // }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-size: 16px;
}
// .SContainer {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   overflow-y: auto;
//   -webkit-overflow-scrolling: touch;
// }
</style>
