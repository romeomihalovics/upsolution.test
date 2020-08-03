<template>
  <section class="thirdSection-wrapper container">
    <h3>Partnerek</h3>
    <div class="row partnerLogos text-center">
      <div class="col-lg col-md-6 py-4">
        <img src="../assets/img/cocacola.svg">
      </div>
      <div class="col-lg col-md-6 py-4">
        <img src="../assets/img/hell.svg">
      </div>
      <div class="col-lg col-md-6 py-4">
        <img src="../assets/img/balaton.svg">
      </div>
      <div class="col-lg col-md-6 py-4">
        <img src="../assets/img/snickers.svg">
      </div>
      <div class="col-lg col-md-6 py-4 m-auto">
        <img src="../assets/img/twix.svg">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.thirdSection-wrapper {
  padding: 60px 0px;
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
