<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                <!-- <div class="button">{{this.$store.state.city}}</div> -->
                <div class="button">{{this.currentCity}}</div>
              </div>
          </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
              <div class="button-wrapper"
              v-for="item of hot"
              :key="item.id"
              @click="handleCityClick(item.name)"
              >
                <div class="button">{{item.name}}</div>
              </div>
                <!-- <div class="button-wrapper">
                  <div class="button">北京</div>
                </div> -->
          </div>
      </div>
      <div class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref ="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"
        v-for="innerItem of item"
        :key="innerItem.id"
        @click="handleCityClick(innerItem.name)"
        >
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      console.log('开始进行跳转')
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        // 在块区域中绑定的为 数组对象，并非指定对象 需加[0]获取
        // this.$nextTick(() => {
        console.log(this.letter)
        this.scroll.scrollToElement(this.$refs[this.letter][0])
        // })
      }
    }
  },
  // 渲染成功时 实例化对象
  activated () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position: absolute
    top: 1.59rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .border-topbottom
      &:before
        border-color: #ccc
      &:after
        border-color: #ccc
      .border-bottom
        &:before
          border-color: #ccc
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          padding: .05rem 0
          margin: .1rem
          text-align: center
          font-size: .25rem
          border: .02rem solid #ccc
    .item-list
      .item
        line-height: .76rem
        color: $666
        padding-left .2rem
</style>
