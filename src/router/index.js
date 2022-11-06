/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-05 14:46:11
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-05 15:51:57
 * @FilePath: \music-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Play from '@/views/Play'
import Search from '@/views/Search'

// 使用路由插件
Vue.use(VueRouter)

// 创建路由规则数组
const routes = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',
        children: [
            {
                path: 'home',
                component: Home,
                meta: {
                    title: "首页"
                }
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: "搜索"
                }
            }
        ]
    },
    {
        path: '/play',
        component: Play
    }
]

// 创建路由对象，传入路由规则
const router = new VueRouter({
    routes
})

// 导出
export default router
