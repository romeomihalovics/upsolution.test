<template>
<transition name="search-transition">
  <div
    v-if="showSearchResults"
    class="searchResults"
   >
    <div
      v-for="(data, id) in searchResults"
      :key="id"
      class="searchResult-item">
      <div class="row">
        <div class="col-md text-center py-md-0 py-2">
          <router-link :to="'/termek/'+data.id" class="d-md-flex align-items-center">
            <div class="item-picture" :style="{ backgroundImage: 'url('+require('@/assets/img/'+data.img)+')' }"></div>
          </router-link>
        </div>
        <div class="col-md text-center py-md-0 py-2">
          <router-link :to="'/termek/'+data.id" class="d-md-flex align-items-center">
            <div class="item-name">{{ data.name }}</div>
          </router-link>
        </div>
        <div class="col-md text-center d-md-flex align-items-center py-md-0 py-2">
          <div class="item-info">
            {{ data.new_price }}
            <span>{{ data.old_price }}</span>
          </div>
        </div>
        <div class="col d-md-flex align-items-center text-center">
          <button class="big-btn" @click="addCart">Kosárba rakom</button>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<style lang="scss">
.search-transition-enter-active, .search-transition-leave-active {
  transition: .2s;
  transform: scaleY(1);
  opacity: 1;
}

.search-transition-enter, .search-transition-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

.searchResults {
  transform-origin: top center;
  padding: 40px 50px;
  z-index: -1;
  position: absolute;
  width: 100%;
  left:0;
  top:100%;
  background-color: $color_white;
  box-shadow: 0px 20px 20px $color_gray;
  .searchResult-item {
    align-items: center;
    box-shadow: 0px 8px 20px $color_gray;
    margin: 10px 0px;
    padding: 25px;
    a {
      height: 100%;
      width: 100%;
      vertical-align: middle;
      text-decoration: none;
    }
    .item-picture {
      content: '';
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .item-name {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 0px;
      color:$color_black;
    }
    .item-info {
      color: $color_pink_darker;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0px;
      span {
        display: block;
        text-decoration: line-through;
        color:$color_black;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 768px) {
  .searchResults {
    .searchResult-item {
      .item-picture {
        content: '';
        width: 100%;
        height: 100px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'searchResults',
  computed: {
    showSearchResults () {
      return this.$store.state.showSearchResults
    },
    searchResults () {
      return this.$store.state.searchResults
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
