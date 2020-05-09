import {GETINDEXCATEMODULE,GETINDEXDATA,GETCATENAVDATA,GETCATELISTS,GETSEARCHVIEWINIT,
  GETSEARCHKEYWORD} from './mutation_type'

export default {
  [GETINDEXCATEMODULE](state,cateNavData){
    state.cateNavData = cateNavData
  },
  [GETINDEXDATA](state,indexData){
    state.indexData = indexData
  },
  [GETCATENAVDATA](state,data){
    state.categoryData = data
  },
  [GETCATELISTS](state,cateListData){
    state.cateLists = cateListData
  },
  [GETSEARCHVIEWINIT](state,searchInitData){
    state.searchViewInitList = searchInitData
  },
  [GETSEARCHKEYWORD](state,searchResData){
    state.searchResList = searchResData.data
  }
}