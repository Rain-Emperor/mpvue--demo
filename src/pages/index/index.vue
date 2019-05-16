<template>
  <div class="wrapper">
    <swiper
      indicator-dots=true
      indicator-active-color="orange"
      autoplay=true
      interval=3000
      circular=true
    >
      <block v-for="item in bannerList" :key="item.bannerId">
        <swiper-item>
          <image class="img" :src="item.imgUrl"></image>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
import store from '@/store/index'
import { mapState, mapActions } from 'vuex'
export default {
  store,
  data () {
    return {

    }
  },
  methods: {
    ...mapActions('home', [
      'getBannerList'
    ])
  },
  computed: {
    ...mapState('home', [
      'bannerList'
    ])
  },
  mounted () {
    this.getBannerList()
  }
}
</script>

<style lang="less">
  .img {
    height: 200px;
    background: red;
  }
</style>

