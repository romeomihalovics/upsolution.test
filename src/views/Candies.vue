<template>
  <div class="candies text-left">
    <div class="container candies-header">
      <router-link to="/" class="backhome">Főoldal</router-link>
      <h3>Édességek</h3>
      <searchBar/>
    </div>
    <div class="candies-wrapper">
      <div class="sectionOverlay"></div>
      <div class="sectionContent">
        <div class="container pt-5">
          <div class="row">
            <div
              v-for="(data, id) in jsondata.all.items"
              :key="id"
              class="col-lg-4 col-md-6"
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
          <div class="text-center">
            <paginate
              :pageCount="jsondata.all.pageCount"
              :firstLastButton="false"
              :prevText="prev"
              :nextText="next"
              :containerClass="'candies-paginator'"
              class="mx-auto">
              <span slot="prevContent" class="big-btn">
                <span class="icon-angle-left"></span>
              </span>
              <span slot="nextContent" class="big-btn">
                <span class="icon-angle-right"></span>
              </span>
            </paginate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.candies {
  .candies-header {
    position: relative;
    margin-bottom: 100px;
    .searchBar {
      z-index: 3;
      bottom: -180px;
    }
  }
  h3 {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0px;
    margin:5px 0 0 0;
    color: $color_black;
  }
  .candies-wrapper {
    background-image: url('../assets/img/luis-aguila-xLvIcAYuuMQ-unsplash.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
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
    }
  }
  .candies-paginator {
    list-style: none;
    margin-top: 40px;
    li {
      display: inline-block;
      padding:5px;
      a {
        color: $color_white;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 2.8px;
      }
      &.active {
        a {
          color: $color_pink_darker;
        }
      }
    }
  }
}
@media (max-width: 1500px) {
  .candies {
    .candies-header {
      .searchBar {
        bottom: -150px;
      }
    }
  }
}

@media (max-width: 576px) {
  .searchBar {
    left:0;
  }
}
</style>

<script>
import searchBar from '@/components/searchBar.vue'

export default {
  name: 'Home',
  components: {
    searchBar
  },
  data () {
    return {
      prev: '<span class="big-btn"><span class="icon-angle-left"></span></span>',
      next: '<span class="big-btn"><span class="icon-angle-right"></span></span>'
    }
  },
  metaInfo () {
    return {
      title: 'Beni\'s - Édességek'
    }
  },
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
