<template>
  <ul class="list" >
    <li
      class="item"
      v-for="item of letters"
      :key=item
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref = item
      >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  props: {
    cities: {}
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    // 该组件初始数据为对象，当异步请求获取数据才进行渲染- 无需每次计算提高性能
    console.log(this.$refs['A'][0])
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
      console.log(this.letters)
    },
    handleTouchMove (e) {
      // if (this.touchStatus) {
      //   const startY = this.$refs['A'][0].offsetTop
      //   console.log(this.$refs['A'])
      //   const touchY = e.touches[0].clientY - 79
      //   const index = Math.floor((touchY - startY) / 22)
      //   if (index >= 0 && index < this.letters.length) {
      //     this.$emit('change', this.letters[index])
      //   }
      // }
    // 性能优化 函数节流， offset数据提前定义计算
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position absolute
    top: 1.59rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      padding .08rem 0
      text-align: center
      color: $bgColor
</style>
