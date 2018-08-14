<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import './assets/styles/global.less';
@import './assets/styles/icons.less';

body {
  background-color: #eef2f3;
}
</style>
