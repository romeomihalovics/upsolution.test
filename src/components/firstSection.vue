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

@media (max-width: 1500px) {
  .carousel-text {
    margin-left: 120px;
    margin-top: 30px;
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
      margin-bottom: 35px;
    }
    .VueCarousel-navigation {
      position: absolute;
      bottom:0;
      left:50px;
      .VueCarousel-navigation-button {
        color: $color_white !important;
        border: 2px solid $color_white;
        border-radius: 5px;
        width: 50px;
        height: 50px;
        margin-right: -20px;
        opacity: 1;
        .carousel-btn-label {
          font-size: 20px;
          line-height: 1.3;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .carousel-bg-slide {
    height: calc(100vh - 120px);
  }
}

@media (max-width: 768px) {
  .carousel-text {
    width: 50%;
    margin-left: 100px;
    margin-top: 30px;
  }
}

@media (max-width: 576px) {
  .carousel-text {
    margin-left: 30px;
    margin-top: 30px;
    width: 80%;
  }
}

@media (max-height: 420px) {
  .carousel-text {
    width: calc(100% - 140px);
    max-width: unset;
    margin: 10px auto;
    right: 0;
    left: 0;
    .VueCarousel-navigation {
      width: 100%;
      left: -10px;
      top:0;
    }
  }
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
