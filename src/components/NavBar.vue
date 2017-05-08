<template>
  <nav class="nav">
    <div class="nav-left">
      <router-link v-for="i in items" class="nav-item" :to="i.path">
        <h1 class="title">{{ i.name }}</h1>
      </router-link>
    </div>
    <div class="nav-right">
      <a class="nav-item" @click="onLogout">Logout</a>    
    </div>
  </nav>  
</template>

<script>
import auth from 'services/auth'

export default {
  props: ['items'],
  methods: {
    onLogout: function () {
      auth.clearToken()
      this.$router.go({ path: '/' })
    }
  }
}
</script>
