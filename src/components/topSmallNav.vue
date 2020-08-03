<template>
  <div>
    <b-navbar type="dark" class="topSmallNav">
      <div class="container">
        <b-navbar-nav class="ml-md-right mr-md-0 mr-auto ml-auto">
          <b-nav-item
            href="#"
            class="smallNav-link"
            @click="showLogin"
            v-if="!loggedin"
          >
            Bejelentkezés
          </b-nav-item>
          <b-nav-item-dropdown
            class="smallNav-link text-center"
            v-if="loggedin"
            right
          >
            <template slot="button-content">
              JOHN DOE
              <span class="icon-angle-down"></span>
            </template>
            <b-dropdown-item href="#">Profilom</b-dropdown-item>
            <b-dropdown-item href="#" class="active">Rendeléseim</b-dropdown-item>
            <b-dropdown-item href="#" @click="fakeLogout">Kijelentkezés</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#" class="smallNav-link">Kosár ({{ cart }})</b-nav-item>
          <b-nav-item-dropdown class="smallNav-link text-center" right>
            <template slot="button-content">
              HU
              <span class="icon-angle-down"></span>
            </template>
            <b-dropdown-item href="#">HU</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CH</b-dropdown-item>
            <b-dropdown-item href="#">JA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="smallNav-link text-center" right>
            <template slot="button-content">
              HUF
              <span class="icon-angle-down"></span>
            </template>
            <b-dropdown-item href="#">HUF</b-dropdown-item>
            <b-dropdown-item href="#">USD</b-dropdown-item>
            <b-dropdown-item href="#">CNY</b-dropdown-item>
            <b-dropdown-item href="#">JPY</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<style lang="scss">
.topSmallNav {
  font-family: 'Poppins';
  font-size: 14px;
  background-color: $color_purple;
  color: $color_white;
  height: 50px;
  text-transform: uppercase;
  .smallNav-link {
    &.text-center {
      li {
        text-align: center;
      }
    }
    ul {
      border-radius: 0px;
      border:none;
      min-width: 2rem;
      box-shadow: 0px 10px 20px $color_gray_darker;
      margin-top: 5px;
      &.dropdown-menu-right {
        &:after {
          position: absolute;
          right: 0;
          top: -10px;
          content: '';
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 5px 10px 5px;
          border-color: transparent transparent $color_white transparent;
        }
        right: 10px;
      }
    }
    a {
      color: $color_white !important;
      padding-right: 15px;
      transition: .2s ease-out;
      &:after {
        display: none;
      }
      span {
        margin-left: 5px;
        font-size: 14px;
      }
      &:hover {
        opacity: .7;
      }
    }
    li {
      text-align: right;
      a {
        padding: 0.25rem 1.5rem;
        color: $color_black !important;
        background-color: transparent !important;
        font-size: 14px;
      }
      &.active {
        a {
          color: $color_pink_darker !important;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'topSmallNav',
  methods: {
    showLogin () {
      this.$root.$emit('showLogin')
    },
    fakeLogout () {
      this.$store.commit('setLoggedin', false)
      this.$cookies.remove('loggedin')
    }
  },
  computed: {
    jsondata () {
      return this.$store.state.jsondata
    },
    loggedin () {
      return this.$store.state.loggedin
    },
    cart () {
      return (this.loggedin) ? this.jsondata.fakeuser.cart + this.$store.state.cart : this.$store.state.cart
    }
  }
}
</script>
