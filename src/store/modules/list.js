export default {
  namespaced: true,
  state: {
    musicList: [],
    pageNum: 1,
    pageSize: 10
  },
  mutations: {
    setMusicList (state, newMusicList) {
      state.musicList = newMusicList
    }
  },
  actions: {
    getMusicList ({ commit, state }) {
      wx.request({
        url: 'http://localhost:7001/api/v1/music',
        methods: 'GET',
        data: {
          pageNum: state.pageNum,
          pageSize: state.pageSize
        },
        success: (res) => {
          let data = res.data
          if (data.code === 0) {
            let newMusicList = data.data.list
            console.log(newMusicList)
            commit('setMusicList', newMusicList)
          } else {
            wx.showToast(data.msg)
          }
        }
      })
    }
  }
}
