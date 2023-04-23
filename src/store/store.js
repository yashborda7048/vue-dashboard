import { createApp } from 'vue'
import App from '../App.vue'
import Vuex from 'vuex'

import modules from './modules'

const app = createApp(App)

app.use(Vuex)

const store = new Vuex.Store({
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

