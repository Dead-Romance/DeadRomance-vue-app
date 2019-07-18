<template>
  <div id="app" ref="app">
    <!-- 开启缓存页面 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <!-- 取消缓存页面 -->
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
export default {
  mounted() {
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
  font-size: 16px;
}
</style>
