<template>
  <div class="wrapper">
    <ul>
      <li
        v-for="(item, index) in musicList"
        :key="item._id"
        class="main_list"
        @click="fn1(item)"
      >
        {{ index + 1}} ： {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store/index'
import { mapState, mapActions } from 'vuex'
export default {
  store,
  methods: {
    ...mapActions('list', [
      'getMusicList'
    ]),
    fn1 (music) {
      let url = music.url
      let newUrl = encodeURIComponent(url)
      wx.navigateTo({
        url: `/pages/music/main?url=${newUrl}`
      })
    }
  },
  computed: {
    ...mapState('list', [
      'musicList'
    ])
  },
  mounted () {
    this.getMusicList()
  }
}
</script>

<style lang="less">
  .wrapper {
    padding: 0 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ul {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .main_list {
      height: 60px;
      line-height: 60px;
    }
  }
</style>
