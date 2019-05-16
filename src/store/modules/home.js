export default {
  namespaced: true,

  state: {
    bannerList: []
  },

  mutations: {
    setBannerList (state, newBannerList) {
      state.bannerList = newBannerList
    }
  },

  actions: {
    getBannerList ({ commit }) {
      wx.request({
        url: 'https://m.maizuo.com/gateway?type=2&cityId=440300&k=6778049',
        methods: 'GET',
        header: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15580074802568390444191"}',
          'X-Host': 'mall.cfg.common-banner'
        },
        success (res) {
          let newData = res.data
          if (newData.status === 0) {
            let newBannerList = newData.data
            commit('setBannerList', newBannerList)
          } else {
            wx.showToast(newData.msg)
          }
        }
      })
    }
  }
}
