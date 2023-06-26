export default {
  changeCity (state, city) {
    state.city = city
    try {
      if (localStorage.city) {
        localStorage.city = city
        console.log('浏览器存储成功')
      }
    } catch (e) {}
  }
}
