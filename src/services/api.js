import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import auth from 'services/auth'

const baseHost = `http://${process.env.HOST}`
const apiHost = `${baseHost}/api/v1`
const apiMock = new MockAdapter(axios)

const errorRes = (err) => ({ status: 'error', error: err.message })

// API Mocks
apiMock.onPost(`${baseHost}/auth/login/`).reply(200, {
  status: 'success',
  data: {
    token: 'fake-token-abcd'
  }
})

apiMock.onGet(`${apiHost}/movies/`).reply(200, {
  status: 'success',
  data: {
    filter: 'recommend',
    movies: [
      { title: 'ABC', image_url: 'ggg', rating: 5 },
      { title: 'DEF', image_url: 'ggg', rating: 5 },
      { title: 'GHI', image_url: 'ggg', rating: 5 },
      { title: 'JKL', image_url: 'ggg', rating: 5 },
      { title: 'MNO', image_url: 'ggg', rating: 5 }
    ]
  }
})

apiMock.onGet(`${apiHost}/musics/`).reply(200, {
  status: 'success',
  data: {
    filter: 'recommend',
    musics: [
      { title: 'ABC', image_url: 'ggg', rating: 5 },
      { title: 'DEF', image_url: 'ggg', rating: 5 },
      { title: 'GHI', image_url: 'ggg', rating: 5 },
      { title: 'JKL', image_url: 'ggg', rating: 5 },
      { title: 'MNO', image_url: 'ggg', rating: 5 }
    ]
  }
})

/* eslint-disable max-len */
const login = async (email, password) => {
  let res = null
  try {
    const url = `${baseHost}/auth/login/`
    const hdrs = { 'Content-Type': 'application/json' }
    res = (await axios.post(url, { email, password }, { headers: hdrs })).data
  } catch (err) {
    res = errorRes(err)
  }
  return res
}

const getMovies = async (filter) => {
  let res = null
  try {
    const url = `${apiHost}/movies/`
    const hdrs = { 'Content-Type': 'application/json' }
    res = (await axios.get(url, { filter }, { headers: hdrs })).data
  } catch (err) {
    res = errorRes(err)
  }
  return res
}

const getMusics = async (filter) => {
  let res = null
  try {
    const url = `${apiHost}/musics/`
    const hdrs = { 'Content-Type': 'application/json' }
    res = (await axios.get(url, { filter }, { headers: hdrs })).data
  } catch (err) {
    res = errorRes(err)
  }
  return res
}
/* eslint-enable max-len */

export default {
  login,
  getMovies,
  getMusics
}
