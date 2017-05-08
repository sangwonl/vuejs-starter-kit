<template>
  <div class="container">
    <header>
      <nav-bar :items="navItems"></nav-bar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import NavBar from 'components/NavBar'

// import api from 'services/api'

export default {
  components: { NavBar },
  data: function () {
    return {}
  },
  computed: {
    ...mapState('global', {
      navItems: state => state.consts.navs
    })
  },
  methods: {
    ...mapActions('global', [])
  }
}
</script>

<style scoped>
header {
  margin-top: 10px;
}

main {
  padding: 10px;
}
</style>
