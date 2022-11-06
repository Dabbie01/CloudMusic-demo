/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-05 16:40:22
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-05 17:09:10
 * @FilePath: \music-demo\src\api\Home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 文件名-尽量和模块页面文件名统一(方便查找)
import request from '@/utils/request'

// 首页 - 推荐歌单
export const recommendMusic = params => request({
    url: '/personalized',
    params
    // 将来外面可能传入params的值 {limit: 20}
})

// 首页 - 推荐最新音乐
export const newMusic = params => request({
    url: "/personalized/newsong",
    params
})