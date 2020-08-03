<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="topNav">
      <div class="container">
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
    </div>
    </b-navbar>
  </div>
</template>

<style lang="scss">
.topNav {
  font-family: 'Poppins';
  padding: 15px 0px !important;
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
  .navbar-toggler {
    width: 30px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    border:none;
    outline: none !important;
    padding:0;
    margin:0px 20px 10px;
    position: relative;
    .lt, .lm, .lb {
      -o-transition: .3s;
      -ms-transition: .3s;
      -moz-transition: .3s;
      -webkit-transition: .3s;
      transition: .3s;
      display: block;
      position: absolute;
      width: 25px;
      height: 2px;
      background: $color_purple;
      content: '';
    }
    .lt {
      top: 10px;
    }
    .lm {
      top: 20px;
    }
    .lb {
      top: 30px;
    }
    &.not-collapsed {
      .lt {
        top: 20px;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      .lm {
        width: 0;
        opacity: 0;
      }
      .lb {
        top: 20px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
}
</style>

<script>
export default {
  name: 'topNav'
}
</script>
