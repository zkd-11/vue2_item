<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    .header-back
      position absolute
      top: 0
      left: .05rem
      width: .64rem
      text-align: center
      font-size: .3rem
      color: #fff
</style>
