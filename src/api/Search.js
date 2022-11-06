/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-06 12:58:40
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-06 13:09:17
 * @FilePath: \music-demo\src\api\Search.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

// 热搜关键字
export const hotSearch = params => request({
    url: '/search/hot',
    params
})

// 搜索结果列表
export const searchResultList = params => request({
    url: '/cloudsearch',
    params
})