<template>
  <div>
    <b-navbar type="dark" class="topSmallNav">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" class="smallNav-link">Bejelentkezés</b-nav-item>
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
  padding: 0 120px !important;
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
      &:after {
        display: none;
      }
      span {
        margin-left: 5px;
        font-size: 14px;
      }
    }
    li {
      text-align: right;
      a {
        padding: 0.25rem 1.5rem;
        color: $color_black !important;
        background-color: transparent !important;
        font-size: 14px;
        &.active {
          color: $color_red !important;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'topSmallNav'
}
</script>
