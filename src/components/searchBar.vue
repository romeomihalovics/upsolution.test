<template>
  <div class="searchBar">
    <div class="container searchBar-container">
      <div class="position-relative">
        <input
          @focus="showSearchResults($event.target.value)"
          @blur="hideSearchResults"
          @keydown.esc="hideSearchResults"
          @input="search($event.target.value)"
          ref="searchInput"
          type="text"
          class="searchBar-input"
          placeholder="Keress az édességek között!">
        <div class="searchBar-btn">
          <span class="icon-search"></span>
        </div>
      </div>
      <searchResults/>
    </div>
  </div>
</template>

<style lang="scss">
.searchBar {
  position: absolute;
  z-index: 5;
  bottom:50px;
  width: 100%;
  .searchBar-container {
    background-color: $color_white;
    box-shadow: 0px 20px 30px $color_gray;
    position: relative;
    .searchBar-input {
      background-color: $color_gray_lightest;
      color: $color_pink_darker;
      margin: 40px 60px;
      padding: 25px 20px;
      border: none;
      font: 'Poppins', sans-serif;
      font-weight: bold;
      font-size: 16px;
      width: calc(100% - 120px);
      border-radius: 5px;
      &::placeholder {
        color: $color_black;
        font-style: italic;
        font-weight: normal;
      }
      &::-webkit-input-placeholder {
        color: $color_black;
        font-style: italic;
        font-weight: normal;
      }
      &:-ms-input-placeholder {
        color: $color_black;
        font-style: italic;
        font-weight: normal;
      }
    }
    .searchBar-btn {
      position: absolute;
      right: 60px;
      top:0;
      bottom:0;
      margin: auto;
      width: 70px;
      height: 70px;
      background-color: $color_pink_darker;
      border-radius: 5px;
      padding:23px;
      span {
        font-size: 24px;
        color: $color_white;
      }
    }
  }
}

@media (max-width: 1500px) {
  .searchBar {
    bottom: 50px;
    .searchBar-container {
      .searchBar-input {
        margin: 20px 30px;
        padding: 13px 10px;
      }
      .searchBar-btn {
        width: 50px;
        height: 50px;
        padding:13px;
      }
    }
  }
}

@media (max-width: 768px) {
  .searchBar {
    bottom: 50px;
    .searchBar-container {
      .searchBar-input {
        margin: 20px 0px;
        padding: 13px 10px;
        width: 100%;
      }
      .searchBar-btn {
        width: 50px;
        height: 50px;
        padding:13px;
        right: 0px;
      }
    }
  }
}
</style>

<script>
import searchResults from '@/components/searchResults.vue'

export default {
  name: 'searchBar',
  components: {
    searchResults
  },
  methods: {
    search (val) {
      this.$store.commit('setSearchResults', this.jsondata.fakeSearchResults)
      if (val) {
        this.showSearchResults(val)
      } else {
        this.hideSearchResults()
      }
    },
    hideSearchResults () {
      this.$store.commit('setShowSearchResults', false)
      this.$refs.searchInput.blur()
    },
    showSearchResults (val) {
      if (val) {
        this.$store.commit('setShowSearchResults', true)
      }
    }
  },
  computed: {
    jsondata () {
      return this.$store.state.jsondata
    }
  }
}
</script>
