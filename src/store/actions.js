import http from '../http/index'
import {GETINDEXCATEMODULE,GETINDEXDATA} from './mutation_type'

export default {
  async [GETINDEXCATEMODULE]({commit}){
    const result = await http.wrap.getIndexCateModule()
    commit(GETINDEXCATEMODULE,result)
  },
  async [GETINDEXDATA] ({commit}){
    const result = await http.wrap.getIndexData()
    commit(GETINDEXDATA,result)
  }
}