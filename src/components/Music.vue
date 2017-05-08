<template>
  <div>
    <ul>
      <li v-for="m in musics">
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
    await this.getMusics()
  },
  computed: {
    ...mapState('global', {
      musics: state => state.musics
    })
  },
  methods: {
    ...mapActions('global', ['getMusics'])
  }
}
</script>

<style scoped>
</style>
