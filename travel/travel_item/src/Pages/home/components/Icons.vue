<template>
  <div class="icons">
   <swiper  :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
    </swiper-slide>
   </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        loop: false
      }
    }
  },
  // data () {
  //   return {
  //     swiperOption: {
  //       autoplay: false // 设置不要自动翻页
  //     },
  //     iconList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
  //       desc: '景点门票这是多出来的内容会用...显示'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
  //       desc: '滑雪季'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
  //       desc: '泡温泉'
  //     }, {
  //       id: '0004',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
  //       desc: '动植物园'
  //     }, {
  //       id: '0005',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
  //       desc: '景点门票'
  //     }, {
  //       id: '0006',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
  //       desc: '滑雪季'
  //     }, {
  //       id: '0007',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
  //       desc: '泡温泉'
  //     }, {
  //       id: '0008',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
  //       desc: '动植物园'
  //     }, {
  //       id: '0009',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
  //       desc: '一日游'
  //     }]
  //   }
  // },
  //   computed: {
  //     pages () {
  //       const pages = []
  //       this.iconList.forEach((item, index) => {
  //         const page = Math.floor(index / 8)
  //         if (!pages[page]) {
  //           pages[page] = []
  //         }
  //         pages[page].push(item)
  //       })
  //       return pages
  //     }
  //   }
  // }
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
  .icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
    margin-top .1rem
    .icon
      float: left
      position: relative
      overflow: hidden
      height: 0
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top 0
        left: 0
        right: 0
        bottom: .44rem
        padding .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        top auto
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        line-width: .7rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
