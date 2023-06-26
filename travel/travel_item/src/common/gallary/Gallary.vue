<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
        <swiper  :options="swiperOptions">
            <swiper-slide
            v-for="(item, index) of imgs"
            :key="index"
            >
              <img class="gallary-img" :src="item">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
// 深度选择器， 由于 swiper-container是引用时，被渲染的父组件，新的不属于本区域组件，需要用到深度选择器
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      // overflow: hidden
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        bottom: -1rem
        color: #fff
</style>
