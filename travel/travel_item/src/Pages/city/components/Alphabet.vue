<template>
  <ul class="list" >
    <li
      class="item"
      v-for="(item, key) of cities"
      :key="key"
      @click="handleLetterClick"
      >
      {{ key }}
    </li>

  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {}
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerHTML)
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
