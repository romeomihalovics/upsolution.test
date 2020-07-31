<template>
  <section class="thirdSection-wrapper">
    <h3>Partnerek</h3>
    <div class="row partnerLogos">
      <div class="col">
        <img src="../assets/img/cocacola.svg">
      </div>
      <div class="col">
        <img src="../assets/img/hell.svg">
      </div>
      <div class="col">
        <img src="../assets/img/balaton.svg">
      </div>
      <div class="col">
        <img src="../assets/img/snickers.svg">
      </div>
      <div class="col">
        <img src="../assets/img/twix.svg">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.thirdSection-wrapper {
  padding: 90px 185px;
  h3 {
    margin-bottom: 90px;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 0px;
  }
  .partnerLogos {
    align-items: center;
    div {
      padding:0 10px;
      img {
        max-height: 85px;
        max-width: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'thirdSection'
}
</script>
