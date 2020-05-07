import {GETINDEXCATEMODULE,GETINDEXDATA} from './mutation_type'

export default {
  [GETINDEXCATEMODULE](state,cateNavData){
    state.cateNavData = cateNavData
  },
  [GETINDEXDATA](state,indexData){
    state.indexData = indexData
  }
}