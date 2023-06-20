<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="wrapper">
    <!--
      因为 swiperList: [] 最开始创建的是空数组 页面无法获取索引显示的是最后一张
      那么如何解决这一问题呢 我们只要在 swiper组件中添加v-if 如果swiper一开始未被真正创建
      那么就不显示 直到swiperList传递了数据被真正渲染 才显示 这时显示的就会是第一张图片
      -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- button-prev和button-next是代表左右箭头 -->
      <!-- <div class="swiper-button-prev"  slot="button-prev"></div>
      <div class="swiper-button-next"  slot="button-next"></div> -->
      <!-- scrollbar是代表滚动条 -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/54cfc34ad8b0a7553e0dc411a8f807e2.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/6f0237182ee000924615f5bc1b5c2d75.jpg'
      }]
    }
  },
  computed: {
    showSwiper () {
      // 显示showSwiper 根据list的长度length
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>  /**指定样式语法 然后他是一个限制范围的样式*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: aqua
//  .swiper-pagination-bullet-active不起作用 它虽然在swiper-pagination中
// 因为swiper-pagination-bullet-active这个类名并不是由当前区域生成，由外界包传入所以生效
// 有了scoped的限制范围 我们可以用 >>>进行穿透处理
//         只要在wrapper下的.swiper-pagination-bullet-active 我们就对其发生规定样式的改变
//     */
    .wrapper
      overflow: hidden
      width: 100%
      height: 0/*这里不能直接在height定义 不然定义的是父级div的宽高比 而不是图片img的宽高比*/
      padding-bottom: 30.5%//这里是定义图片的外部div块，在图片未加载时就已经被撑开，所以不会出现卡顿，相当于提前给出模块定位
      background: #ccc
      .swiper-img
        width: 100%
</style>
