<template>
  <div>
    <router-link
    tag="div" to="/"
    class="header-abs"
    v-show="'showAbs'">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
    >
      <router-link to="/">
      <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // const top = document.documentElement.scrollTop
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      console.log(top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 同样可以使用mounted进行挂载
  mounted () {
    console.log('为什么失效了')
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  // 离开该组件时， 对组件进行解绑
//   deactivated () {
//     window.removeEventListener('scroll', this.handleScroll)
//   }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0,0,0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 99
    position fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    font-size: 0.32rem
    text-align: center
    color: #fff
    background: $bgColor
    .header-fixed-back
      // 层级吧，类同snipaste，高级能显示在低级上
      position absolute
      top: 0
      left: .05rem
      width: .64rem
      text-align: center
      font-size: .3rem
      color: #fff
</style>
