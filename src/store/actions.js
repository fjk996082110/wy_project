import axios from 'axios'
import http from '../http/index'
import {GETINDEXCATEMODULE,GETINDEXDATA,GETCATENAVDATA,GETCATELISTS,GETSEARCHVIEWINIT,
  GETSEARCHKEYWORD,GETNAVWRAP,GETMANUAL} from './mutation_type'

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
  },
  async [GETSEARCHVIEWINIT]({commit}){
    let result = await http.search.getSearchViewInit()
    commit (GETSEARCHVIEWINIT,result.data)
  },
  async [GETSEARCHKEYWORD]({commit},keyWord){
    // let result = await http.search.getSearchKeyWord(keyWordObj)
    let {data} = await axios.get(`http://localhost:8080/xhr/search/searchAutoComplete.json?keywordPrefix=${keyWord}`)
    commit(GETSEARCHKEYWORD,data)
  },
  async [GETNAVWRAP]({commit}){
    let result = await http.needBuy.getNavWrap()
    commit (GETNAVWRAP,result.data.navList)
  },
  async [GETMANUAL]({commit}){
    let result = await http.needBuy.getManual()
    commit (GETMANUAL,result.data)
  }
}