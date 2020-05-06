// import local from '../../utils/local'
export default {
  name:'wrap',
  api:{
    getCateNavData:{
      url:'/getCateNavData',
      method:'get',
      corsUrl:'/3001'
    },
    getCateList:{
      url:'/getCateList',
      method:'get',
      corsUrl:'/3001'
    },
  }
}