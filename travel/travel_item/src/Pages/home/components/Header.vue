<template>

  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        <!-- {{ this.city }} -->
        {{ this.city }}
        <!-- {{ this.$store.state.city }} -->
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  // props: {
  //   city: String
  // }
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  display: flex
  line-height: .86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .3rem
  .header-input
    flex: 1
    height: .62rem
    line-height: .62rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
  // 因为之前width数据写死了， 导致城市名超过此宽度 会使样式变形
    // width: 1.35rem
    min-width 1.05rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      font-size: .024rem
</style>
