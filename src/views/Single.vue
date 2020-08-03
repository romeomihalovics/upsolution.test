<template>
  <div class="single pb-5">
    <div class="container">
      <div class="page-route text-left mb-3">
        <router-link to="/" class="backhome dark">Főoldal</router-link>
        <span class="icon-angle-right"></span>
        <router-link to="/edessegek" class="backhome dark">Termékek</router-link>
      </div>
      <div class="row">
        <div class="col">
          <carousel
            :per-page="1"
            :navigationEnabled="false"
            :paginationEnabled="true"
            class="item-carousel"
          >
            <slide
              v-for="(data, id) in jsondata.all.items[id].single.imgs"
              :key="id"
              :style="{ backgroundImage: 'url('+require('@/assets/img/'+data)+')' }"
              class="item-carousel-slide"
            ></slide>
          </carousel>
        </div>
        <div class="col text-left pl-5">
          <div class="single-label">{{ jsondata.all.items[id].label }}</div>
          <div class="single-title">{{ jsondata.all.items[id].name }}</div>
          <div class="single-desc">{{ jsondata.all.items[id].single.small_desc }}</div>
          <div class="single-info">
            {{ jsondata.all.items[id].new_price }} <span>{{ jsondata.all.items[id].old_price }}</span>
          </div>
          <div class="single-quantity my-5">
            <input type="number" id="quantity" min="1" value="1">
            <label for="quantity">db</label>
          </div>
          <button class="big-btn">Kosárba Rakom</button>
        </div>
      </div>
      <div class="single-tabs text-left">
        <input type="radio" id="tab1" name="single-tab" checked>
        <input type="radio" id="tab2" name="single-tab">
        <nav>
          <ul>
            <li class="tab1">
              <label for="tab1">Leírás</label>
            </li>
            <li class="tab2">
              <label for="tab2">Összetevők</label>
            </li>
          </ul>
        </nav>
        <div class="tab-wrapper">
          <div class="tab1">
            {{ jsondata.all.items[id].single.detailed_desc }}
          </div>
          <div class="tab2">
             {{ jsondata.all.items[id].single.ingredients }}
          </div>
        </div>
      </div>
    </div>
    <partners/>
  </div>
</template>

<style lang="scss">
.item-carousel {
  border-radius: 5px;
  box-shadow: 0px 20px 40px $color_gray;
  .item-carousel-slide {
    height: 540px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
    .VueCarousel-dot-container {
      margin:20px 0px;
      .VueCarousel-dot {
        width: 14px !important;
        height: 14px !important;
        padding:5px !important;
        background-color: $color_gray_darker !important;
        vertical-align: middle;
        margin: auto 0px !important;
        &--active {
          background-color: $color_pink_darker !important;
        }
      }
    }
  }
}

.single-label {
  background-color: $color_black;
  color: $color_white;
  font-size: 18px;
  font-family: 'Varela Round';
  letter-spacing: 0px;
  text-transform: uppercase;
  padding:10px 15px;
  width: fit-content;
}

.single-title {
  font-size: 46px;
  font-weight: 700;
  letter-spacing: 0px;
  color: $color_black;
  margin:15px 0px;
}

.single-desc {
  font-size: 18px;
  color: $color_black;
  letter-spacing: 0px;
  margin-bottom: 15px;
}

.single-info {
  color: $color_pink_darker;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0px;
  span {
    color: $color_black;
    font-weight: 500;
    text-decoration: line-through;
    margin-left: 15px;
  }
}

.single-quantity {
  input {
    border:none;
    width: 70px;
    text-align: center;
    margin-right: 10px
  }
}

.single-tabs {
  width: 100%;
  margin-top: 90px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      label {
        float: left;
        padding: 20px 70px;
        text-align: center;
        letter-spacing: 0.48px;
        color: $color_pink_darker;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: .2s ease-out;
        margin:0;
      }
    }
  }
  .tab-wrapper {
    box-shadow: 0px 20px 60px $color_gray;
    clear: both;
    div {
      padding: 40px 60px;
      width: 100%;
      color: $color_black;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.48px;
    }
  }
  input, .tab-wrapper > div {
    display: none;
  }
  #tab1:checked ~ .tab-wrapper .tab1,
  #tab2:checked ~ .tab-wrapper .tab2 {
    display: block;
  }
  #tab1:not(:checked) ~ nav .tab1 > label,
  #tab2:not(:checked) ~ nav .tab2 > label{
    color: $color_white;
    background-color: $color_pink_darker;
    box-shadow: 0px 20px 60px $color_gray;
  }
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel'
import partners from '@/components/thirdSection.vue'

export default {
  name: 'Single',
  components: {
    Carousel,
    Slide,
    partners
  },
  metaInfo () {
    return {
      title: 'Beni\'s - Termék'
    }
  },
  computed: {
    jsondata () {
      return this.$store.state.jsondata
    },
    id () {
      return this.$route.params.id
    }
  }
}
</script>
