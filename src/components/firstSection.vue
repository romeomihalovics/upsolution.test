<template>
  <section class="firstSection-wrapper full-height">
    <carousel
      :per-page="1"
      :mouse-drag="false"
      :navigationEnabled="true"
      :paginationEnabled="false"
      :touchDrag="false"
      :navigationNextLabel="nextLabel"
      :navigationPrevLabel="prevLabel"
      @pageChange="carouselHandler"
      class="carousel-text"
    >
      <slide
        v-for="(data, id) in jsondata.slides"
        :key="id"
      >
        <h2>
          {{ data.header }}
        </h2>
        <p>
          {{ data.text }}
        </p>
      </slide>
    </carousel>
    <carousel
      :per-page="1"
      :mouse-drag="false"
      :navigationEnabled="false"
      :paginationEnabled="false"
      :touchDrag="false"
      :navigateTo="currentPage"
      class="carousel-bg"
    >
      <slide
        v-for="(data, id) in jsondata.slides"
        :key="id"
        class="carousel-bg-slide"
        :style="{ backgroundImage: 'url('+require('@/assets/img/'+data.img)+')' }"
      ></slide>
    </carousel>
    <searchBar/>
  </section>
</template>

<style lang="scss">
.carousel-text {
  position: absolute;
  z-index: 2;
  margin-left: 210px;
  margin-top: 115px;
  width: 33%;
  max-width: 510px;
  text-align: left;
  color: $color_white;
  h2 {
    font-size: 46px;
    font-weight: 700;
    letter-spacing: 0px;
  }
  p {
    font-size: 18px;
    margin-bottom: 40px;
  }
  .VueCarousel-navigation {
    position: absolute;
    bottom:0;
    left:70px;
    .VueCarousel-navigation-button {
      color: $color_white !important;
      border: 2px solid $color_white;
      border-radius: 5px;
      width: 70px;
      height: 70px;
      margin-right: -20px;
      opacity: 1;
      .carousel-btn-label {
        font-size: 20px;
        line-height: 2;
      }
    }
  }
}

.carousel-bg-slide {
  height: calc(100vh - 162px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 40%;
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel'
import searchBar from '@/components/searchBar.vue'

export default {
  name: 'firstSection',
  components: {
    Carousel,
    Slide,
    searchBar
  },
  data () {
    return {
      currentPage: 0,
      nextLabel: "<span class='icon-arrow-right carousel-btn-label'></span>",
      prevLabel: "<span class='icon-arrow-left carousel-btn-label'></span>"
    }
  },
  methods: {
    carouselHandler (n) {
      this.currentPage = n
    }
  },
  computed: {
    jsondata () {
      return this.$store.state.jsondata
    }
  }
}
</script>
