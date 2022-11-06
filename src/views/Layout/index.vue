<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-05 14:37:50
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-06 15:34:25
 * @FilePath: \music-demo\src\views\Home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed/>
    <div class="main">
      <!-- 二级路由-挂载点 -->
      <router-view></router-view>
    </div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: 0,
      activeTitle: this.$route.meta.title,
    }
  },
  // 路由切换
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title;
    }
  }
}
</script>

<style scoped>
  /* 中间内容区域 - 容器样式(留好上下导航所占位置) */
  .main {
    padding-top: 46px;
    padding-bottom: 50px;
  }
</style>