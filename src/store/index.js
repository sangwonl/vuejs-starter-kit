import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import globalModule from './modules/global'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  plugins: debug ? [createLogger()] : [],
  strict: debug,
  modules: {
    global: {
      ...globalModule
    }
  }
})
