const loggedIn = () => {
  const token = getToken()
  return token !== undefined && token !== ''
}

const storeToken = (authToken) => {
  localStorage.setItem('auth-token', authToken)
}

const clearToken = () => {
  localStorage.removeItem('auth-token')
}

const getToken = () => {
  const token = localStorage.getItem('auth-token')
  return token !== null ? token : ''
}

export default {
  loggedIn,
  storeToken,
  clearToken,
  getToken
}
