import {GETINDEXCATEMODULE,GETINDEXDATA,GETCATENAVDATA,GETCATELISTS} from './mutation_type'

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
  }
}