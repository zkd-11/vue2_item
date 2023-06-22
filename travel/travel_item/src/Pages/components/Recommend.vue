<template>
<div>
  <div class="title">热销推荐</div>
  <ul >
     <!-- border-bottom css里自动会加边框-->
    <li class="item border-bottom" v-for="item of list" :key="item.id">
      <img class="item-img" :src="item.imgUrl">
      <div class="item-info">
        <p class="item-title">{{ item.title }}</p>
        <p class="item-desc">{{ item.desc }}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default{
  props: {
    list: Array
  },
  name: 'HomeRecommend'
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '0001',
  //       imgUrl: 'https://s2.loli.net/2022/09/11/jQwfHdSNi84oVr7.png',
  //       title: '大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界',
  //       desc: '浪漫大连首战，浪漫的海洋主题乐园 浪漫大连首战，浪漫的海洋主题乐园'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'https://s2.loli.net/2022/09/11/jQwfHdSNi84oVr7.png',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首战，浪漫的海洋主题乐园'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'https://s2.loli.net/2022/09/11/jQwfHdSNi84oVr7.png',
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
  margin-top: .1rem
  line-height: .8rem
  background-color: #eee
  text-indent: .2rem
.item
  display: flex
  overflow: hidden
  height: 1.9rem
  .item-img
    display: flex
    width: 1.7rem
    height: 1.7rem
    padding .1rem
  .item-info
    flex: 1
    padding: .13rem
    min-width: .3rem //让单行溢出部分省略号展示
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      horder-radius: 0.06rem
      color: #fff
</style>
