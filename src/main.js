import '@babel/polyfill'
import Vue from 'vue'
import './install/vuetify'
import Localization from './install/localization'
import isNil from 'lodash/isNil'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
