<template>
  <div class="searchBar">
    <div class="container searchBar-container">
      <div class="position-relative">
        <input type="text" class="searchBar-input" placeholder="Keress az édességek között!">
        <div class="searchBar-btn">
          <span class="icon-search"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.searchBar {
  position: absolute;
  bottom:50px;
  width: 100%;
  .searchBar-container {
    background-color: $color_white;
    box-shadow: 0px 20px 30px $color_gray;
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
</style>

<script>
export default {
  name: 'searchBar'
}
</script>
