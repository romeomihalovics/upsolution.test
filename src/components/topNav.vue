<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="topNav">
      <b-navbar-toggle class="navbar-toggler ml-auto" target="topNav">
        <span class="lt"></span>
        <span class="lm"></span>
        <span class="lb"></span>
      </b-navbar-toggle>
      <b-collapse id="topNav" is-nav>
        <b-navbar-brand to="/">
          <img src="../assets/img/logo.svg" class="topNav-brand">
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="topNav-link">Főoldal</b-nav-item>
          <b-nav-item to="/edessegek" class="topNav-link">Édességek</b-nav-item>
          <b-nav-item to="/gyik" class="topNav-link">GYIK</b-nav-item>
          <b-nav-item to="/kapcsolat" class="topNav-link">Kapcsolat</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss">
.topNav {
  font-family: 'Poppins';
  padding: 15px 120px !important;
  .topNav-brand {
    width: 230px;
    height: 72px;
  }
  .topNav-link {
    a {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 0.96px;
      color: $color_purple !important;
    }
  }
}
</style>

<script>
export default {
  name: 'topNav'
}
</script>
