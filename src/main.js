/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-05 14:21:31
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-06 14:41:07
 * @FilePath: \music-demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"
import "@/styles/reset.css"
import router from '@/router'

import { Tabbar, TabbarItem, NavBar,Col, Row, Image as VanImage, Cell, Icon, Search, List } from 'vant'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
