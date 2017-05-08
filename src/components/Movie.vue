<template>
  <div>
    <ul>
      <li v-for="m in movies">
        {{ m.title }}
        {{ m.image_url }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {},
  data: function () {
    return {}
  },
  mounted: async function () {
    await this.getMovies()
  },
  computed: {
    ...mapState('global', {
      movies: state => state.movies
    })
  },
  methods: {
    ...mapActions('global', ['getMovies'])
  }
}
</script>

<style scoped>
</style>
