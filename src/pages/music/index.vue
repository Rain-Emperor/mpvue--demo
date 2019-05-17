<template>
  <div class="wrapper">
    <h1>{{ musicTitle }}</h1>
    <img :src="musicImg" alt="">
    <button @click="fn1()">点我播放</button>
    <div class="outer"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      musicTitle: null,
      musicImg: null,
      musicUrl: null
    }
  },

  methods: {
    fn1: function () {
      console.log(666)
      this.audio = wx.createInnerAudioContext()
      this.audio.src = this.musicUrl
      this.audio.play()
    }
  },

  onLoad (options) {
    this.musicTitle = decodeURIComponent(options.musicTitle)
    this.musicImg = decodeURIComponent(options.musicImg)
    this.musicUrl = decodeURIComponent(options.musicUrl)
  },

  onUnload () {
    // 退出就销毁音乐
    this.audio.destroy()
  }
}
</script>

<style lang="less">
  .wrapper {

    h1 {
      color: red;
      font-weight: 900;
      text-align: center;
    }

    img {
      width: 100%;
      height: 250px;
      margin: 20px 0;
    }

    .outer {
      height: 40px;
      padding: 10px;
      margin: 0 10px;
      border: 1px #000 solid;
    }
  }
</style>

