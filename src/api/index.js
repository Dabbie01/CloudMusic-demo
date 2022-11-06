/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-05 16:39:22
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-06 15:54:55
 * @FilePath: \music-demo\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// api文件夹下 各个请求模块js, 都统一来到index.js再向外导出
import { recommendMusic, newMusic } from './Home'
import {hotSearch, searchResultList} from './Search'
import {getSongById, getLyricById} from './Play'

export const recommendMusicAPI = recommendMusic // 请求推荐歌单的方法导出
export const newMusicAPI = newMusic

export const hotSearchAPI = hotSearch
export const searchResultListAPI = searchResultList

export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据