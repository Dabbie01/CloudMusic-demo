<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-05 14:37:50
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-06 15:44:37
 * @FilePath: \music-demo\src\views\Home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" @input="inputFn"/>
    <div class="search_wrap" v-if="resultList.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span class="hot_item" 
        v-for="(obj, index) in hotArr" :key="index"
        @click="fn(obj.first)">{{obj.first}}</span>
      </div>
    </div>
    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <SongItem
          v-for="obj in resultList"
          :key="obj.id"
          :name="obj.name"
          :author="obj.ar[0].name"
          :id="obj.id"
        ></SongItem>
    </van-list>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultListAPI } from '@/api';
import SongItem from '@/components/SongItem.vue'


export default {
  data(){
    return {
      value: "",
      hotArr: [],  //热搜关键字
      resultList: [], //搜索结果
      loading: false, // 加载中 (状态) - 只有为false, 才能触底后自动触发onload方法
      finished: false, // 未加载全部 (如果设置为true, 底部就不会再次执行onload, 代表全部加载完成)
      page: 1, // 当前搜索结果的页码
      timer: null // 输入框-防抖定时器
    }
  },
  async created() {
    const res = await hotSearchAPI();
    this.hotArr = res.data.result.hots;
  },
  methods: {
    async getListFn() {
      return await searchResultListAPI({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20, // 固定公式
      }); 
    },
    async fn(val) {
      this.page = 1; // 点击重新获取第一页数据
      this.finished = false; // 点击新关键词-可能有新的数据
      this.value = val; // 选中的关键词显示到搜索框
      const res = await this.getListFn();
      this.resultList = res.data.result.songs;
      this.loading = false; // 本次数据加载完毕-才能让list加载更多
    },
    async inputFn(){
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        this.page = 1; // 点击重新获取第一页数据
        this.finished = false // 输入框关键字改变-可能有新数据(不一定加载完成了)
        // 输入框值改变
        if (this.value.length === 0) {
          // 搜索关键词如果没有, 就把搜索结果清空阻止网络请求发送(提前return)
          this.resultList = [];
          return;
        }
        const res = await this.getListFn();
        console.log(res);
        // 如果搜索结果响应数据没有songs字段-无数据
        if (res.data.result.songs === undefined) {
          this.resultList = [];
	  return
        }
        this.resultList = res.data.result.songs;
        this.loading = false;
      }, 600)
    },
    async onLoad() {
      // 触底事件(要加载下一页的数据咯), 内部会自动把loading改为true
      this.page++;
      const res = await this.getListFn();
      if (res.data.result.songs === undefined) { // 没有更多数据了
          this.finished = true; // 全部加载完成(list不会在触发onload方法)
         this.loading = false; // 本次加载完成
        return;
       }
      this.resultList = [...this.resultList, ...res.data.result.songs];
      this.loading = false; // 数据加载完毕-保证下一次还能触发onload
    },
  },
  components: {
    SongItem,
  }
}
</script>

<style scoped>
  /* 搜索容器的样式 */
  .search_wrap {
    padding: 0.266667rem;
  }

  /*热门搜索文字标题样式 */
  .hot_title {
    font-size: 0.32rem;
    color: #666;
  }

  /* 热搜词_容器 */
  .hot_name_wrap {
    margin: 0.266667rem 0;
  }

  /* 热搜词_样式 */
  .hot_item {
    display: inline-block;
    height: 0.853333rem;
    margin-right: 0.213333rem;
    margin-bottom: 0.213333rem;
    padding: 0 0.373333rem;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
    color: #333;
    border-color: #d3d4da;
    border-radius: 0.853333rem;
    border: 1px solid #d3d4da;
  }

  /* 给单元格设置底部边框 */
  .van-cell {
    border-bottom: 1px solid lightgray;
  }
</style>