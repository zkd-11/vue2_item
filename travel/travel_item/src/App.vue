<template>
  <div id="app">
    <!-- 表示对detail组件的请求不会进行缓存， 这样每次的请求都需重新请求资源 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
