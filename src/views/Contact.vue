<template>
  <div class="contact container text-left">
    <div class="contact-form">
      <h3>Kapcsolat</h3>
      <hr/>
      <p>További kérdése van, részleges tájékoztatásra van szüksége? Írjon nekünk, keresse munkatársainkat!</p>
      <form>
        <div class="row">
          <div class="col-6">
            <label class="contact-input">
              <input type="text" name="surname" placeholder=" ">
              <span class="label-wrapper">
                <span>Vezetéknév</span>
              </span>
            </label>
          </div>
          <div class="col-6">
            <label class="contact-input">
              <input type="text" name="lastname" placeholder=" ">
              <span class="label-wrapper">
                <span>Keresztnév</span>
              </span>
            </label>
          </div>
          <div class="col-6">
            <label class="contact-input">
              <input type="text" name="email" placeholder=" ">
              <span class="label-wrapper">
                <span>E-mail</span>
              </span>
            </label>
          </div>
          <div class="col-6">
            <label class="contact-input">
              <input type="text" name="orderid" placeholder=" ">
              <span class="label-wrapper">
                <span>Rendelési azonosító</span>
              </span>
            </label>
          </div>
          <div class="col">
            <label class="contact-input">
              <textarea name="message" placeholder=" "></textarea>
              <span class="label-wrapper">
                <span>Üzenet</span>
              </span>
            </label>
          </div>
          <div class="w-100"></div>
          <div class="col-6 py-5 agreed-check">
            <input type="checkbox" id="agreed" name="agreed">
            <label for="agreed">Elfogadom az <a href="#" class="dark">Adatvédelmi Nyilatkozat</a>-ot.</label>
          </div>
          <div class="col-6 py-5 mb-2">
            <button class="big-btn contact-btn">Küldés</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.contact {
  .contact-form {
    h3 {
      font-size: 36px;
      font-weight: 500;
      letter-spacing: 0px;
      margin:30px 0 0 0;
      color: $color_black;
    }
    hr {
      height: 5px;
      width: 100%;
      background: $color_pink_darker;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0px;
      color: $color_black;
      margin-top: 48px;
      margin-bottom: 36px;
    }
    .agreed-check {
      vertical-align: middle;
      margin: auto;
    }
    .contact-btn {
      max-width: 100%;
      font-size: 14px;
      letter-spacing: 2.8px;
    }
    .contact-input {
      position: relative;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0px;
      color: $color_black;
      display: inline-block;
      width: 100%;
      margin:30px 0px;
      input {
        padding:15px 0px;
        background-color: transparent;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        border-bottom: 2px solid $color_gray_dark;
        &:not(:placeholder-shown):not(:focus)  ~ .label-wrapper > span {
          opacity:0;
        }
        &:not(:focus) ~ .label-wrapper > span {
          bottom: 15px;
        }
        &:focus ~ .label-wrapper::after {
          width: 100%;
        }
        &:focus ~ .label-wrapper {
          color: $color_pink_darker;
        }
      }
      textarea {
        padding:15px 0px;
        background-color: transparent;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        min-height: 100px;
        border-bottom: 2px solid $color_gray_dark;
        &:not(:placeholder-shown):not(:focus)  ~ .label-wrapper > span {
          opacity:0;
        }
        & ~ .label-wrapper {
          top: 0;
          bottom: unset;
          height: calc(100% - 1px);
          span {
            bottom: unset;
            top: -15px;
          }
        }
        &:focus ~ .label-wrapper::after {
          width: 100%;
        }
        &:focus ~ .label-wrapper {
          color: $color_pink_darker;
        }
      }
      .label-wrapper {
        width: 100%;
        height: 50px;
        position: absolute;
        cursor: text;
        pointer-events: none;
        left:0;
        bottom:0;
        transition: .2s ease-out;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          transition: width .2s ease-out;
          background-color: $color_pink_darker;
        }
        span {
          position: absolute;
          bottom: 90%;
          left: 0;
          transition: .2s ease-out;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Home',
  metaInfo () {
    return {
      title: 'Beni\'s - Kapcsolat'
    }
  }
}
</script>
