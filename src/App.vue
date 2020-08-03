<template>
  <div id="app">
    <topSmallNav/>
    <topNav/>
    <router-view/>
    <pageFooter/>
    <authModals/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import topSmallNav from '@/components/topSmallNav.vue'
import topNav from '@/components/topNav.vue'
import pageFooter from '@/components/footer.vue'
import authModals from '@/components/authModals.vue'
import data from '@/data.json'

export default {
  beforeMount () {
    this.$store.commit('setJsonData', data[0])
    this.$store.commit('setCart', this.$cookies.get('cart') || 0)
    this.$store.commit('setLoggedin', this.$cookies.get('loggedin') || false)
  },
  components: {
    topSmallNav,
    topNav,
    pageFooter,
    authModals
  }
}
</script>
