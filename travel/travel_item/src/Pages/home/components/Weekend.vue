<template>
  <div class="wrapper">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"
      v-for="item of list"
      :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首战，浪漫的海洋主题乐园'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首战，浪漫的海洋主题乐园'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首战，浪漫的海洋主题乐园'
  //     }]
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    // padding-bottom: 33.9%
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .13rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
