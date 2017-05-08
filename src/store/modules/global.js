import api from 'services/api'

export default {
  namespaced: true,
  state: {
    consts: {
      navs: [
        { path: '/movies', name: 'Movie' },
        { path: '/musics', name: 'Music' }
      ]
    },
    movies: [],
    musics: []
  },
  getters: {},
  mutations: {
    replaceMovies: function (state, movies) {
      state.movies = movies
    },
    replaceMusics: function (state, musics) {
      state.musics = musics
    }
  },
  actions: {
    getMovies: async function ({ commit }, filter) {
      const res = await api.getMovies(filter)
      console.log(res)
      if (res && res.status === 'success') {
        commit('replaceMovies', res.data.movies)
      }
    },
    getMusics: async function ({ commit }, filter) {
      const res = await api.getMusics(filter)
      console.log(res)
      if (res && res.status === 'success') {
        commit('replaceMusics', res.data.musics)
      }
    }
  }
}
