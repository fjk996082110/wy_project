export default {
  name:'search',
  api:{
    //值得买导航请求
    getNavWrap:{
      url:"/know/navWap.json",
      method:'get',
      corsUrl:"/topic/v1"
    },
    //瀑布流数据
    getManual:{
      url:"/find/recManual.json",
      method:'get',
      corsUrl:"/topic/v1"
    },
    //触底数据
    // getMoreManual:{
    //   url:`/find/recAuto.json`,
    //   method:'get',
    //   corsUrl:"/topic/v1"
    // }
  }
}