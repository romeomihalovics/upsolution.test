<template>
  <section class="secondSection-wrapper full-height">
    <div class="sectionOverlay"></div>
    <div class="sectionContent">
      <h3>Ajánlott édességek</h3>
      <div class="container">
        <div class="row">
          <div
            v-for="(data, id) in jsondata.recommended"
            :key="id"
            class="col-md-4"
          >
            <div class="grid-item">
              <div class="item-label">{{ data.label }}</div>
              <div class="item-picture">
                <router-link :to="'/termek/'+data.id">
                  <div :style="{ backgroundImage: 'url('+require('@/assets/img/'+data.img)+')' }"></div>
                </router-link>
              </div>
              <div class="item-name">
                <router-link :to="'/termek/'+data.id">{{ data.name }}</router-link>
              </div>
              <div class="item-info">
                {{ data.new_price }} <span>{{ data.old_price }}</span>
              </div>
              <div class="item-btn">
                <button class="big-btn" @click="addCart">Kosárba rakom</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="seeAll">
        <router-link to="/edessegek"><button class="big-btn">Összes Édesség</button></router-link>
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
  name: 'secondSection',
  computed: {
    jsondata () {
      return this.$store.state.jsondata
    }
  },
  methods: {
    addCart () {
      this.$cookies.set('cart', this.$store.state.cart + 1)
      this.$store.commit('setCart', this.$cookies.get('cart') || 0)
    }
  }
}
</script>
