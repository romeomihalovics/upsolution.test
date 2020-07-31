<template>
  <section class="secondSection-wrapper full-height">
    <div class="sectionOverlay"></div>
    <div class="sectionContent">
      <h3>Ajánlott édességek</h3>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="grid-item">
              <div class="item-label">Új!</div>
              <div class="item-picture">
                <div :style="{ backgroundImage: 'url('+require('@/assets/img/cocacola_item.png')+')' }"></div>
              </div>
              <div class="item-name">Coca-Cola 0,33 dl</div>
              <div class="item-info">
                240 Ft/db <span>290 Ft/db</span>
              </div>
              <div class="item-btn">
                <button class="big-btn">Kosárba rakom</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="seeAll">
        <button class="big-btn">Összes Édesség</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.secondSection-wrapper {
  background-image: url('../assets/img/luis-aguila-xLvIcAYuuMQ-unsplash.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .sectionOverlay {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $color_purple;
    opacity: .8;
    z-index: 1;
  }
  .sectionContent {
    position: relative;
    z-index: 2;
    padding:70px 0px;
    h3 {
      color: $color_white;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: 0px;
      margin-bottom:  50px;
    }
    .seeAll {
      margin:50px auto;
    }
  }
}
</style>

<script>
export default {
  name: 'secondSection'
}
</script>
