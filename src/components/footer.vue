<template>
  <footer class="row p-md-3">
    <div class="footerTop"></div>
    <div class="col-lg col-md-6 pt-md-3 pt-3">
      <img src="../assets/img/paymethods.png" class="footerPayMethods">
    </div>
    <div class="col-lg col-md-6 pt-md-3 pt-4">
      <a href="#">Adatkezelés</a>
      <a href="#">ÁSZF</a>
      <a href="#">Impresszum</a>
    </div>
    <div class="col-lg col-md-12 pt-md-3 pt-2">
      Minden jog fenntartva &copy; 2020 Benis
      <img src="../assets/img/lolipop.svg" class="footerLogo">
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  position: relative;
  margin: 0 !important;
  color: $color_black;
  font-size: 14px;
  align-items: center;
  a {
    color: $color_black;
    text-decoration: none;
    padding:0 10px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.42px;
    &:hover {
      color: $color_black;
      text-decoration: none;
    }
  }
  .footerLogo {
    height: 44px;
    margin-bottom: 5px;
    margin-left: 5px;
  }
  .footerPayMethods {
    height: 40px;
  }
  .footerTop {
    content: '';
    width: 100%;
    height: 5px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background: linear-gradient(to right, $color_pink_darker 0%, $color_pink_light 100%);
  }
}
</style>

<script>
export default {
  name: 'pageFooter'
}
</script>
