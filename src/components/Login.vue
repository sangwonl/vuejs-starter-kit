<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <i class="fa fa-envelope"></i>
    <input class="input" type="email" placeholder="Email" v-model="email">
    <i class="fa fa-lock"></i>
    <input class="input" type="password" placeholder="Password" v-model="password">
    <button class="button" @click="onLogin">Login</button>
  </div>
</template>

<script>
import api from 'services/api'
import auth from 'services/auth'

export default {
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin: async function () {
      if (this.email === '' || this.password === '') {
        alert('Not allowed empty email or password.')
        return
      }

      const res = await api.login(this.email, this.password)
      if (res.status === 'success' && res.data.token) {
        auth.storeToken(res.data.token)
        this.$router.replace({ path: this.$route.query.redirect })
      } else {
        alert('Invalid email or password')
      }
    }
  }
}
</script>
