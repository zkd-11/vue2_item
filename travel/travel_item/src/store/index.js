import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   city: defaultCity
  // },
  state,
  // 可直接跳过action 直接调用 mutations
  // actions: {
  //   changeCity (ctx, city) {
  //     console.log('111')
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // mutations: {
  //   changeCity (state, city) {
  //     state.city = city
  //     try {
  //       if (localStorage.city) {
  //         localStorage.city = city
  //         console.log('浏览器存储成功')
  //       }
  //     } catch (e) {}
  //   }
  // },
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }

})
