import http from '../http/index'
import {GETINDEXCATEMODULE,GETINDEXDATA,GETCATENAVDATA,GETCATELISTS} from './mutation_type'

export default {
  async [GETINDEXCATEMODULE]({commit}){
    const result = await http.wrap.getIndexCateModule()
    commit(GETINDEXCATEMODULE,result)
  },
  async [GETINDEXDATA] ({commit}){
    let result = await http.wrap.getIndexData()
    commit(GETINDEXDATA,result)
  },
  async [GETCATENAVDATA]({commit}){
    let result = await http.wrap.getCateNavDatas()
    commit(GETCATENAVDATA,result.categoryL1List)
  },
  async [GETCATELISTS]({commit}){
    let result = await http.wrap.getCateLists
    commit(GETCATELISTS,result.categoryList)
  }
}