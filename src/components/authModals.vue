<template>
  <div id="authModals">
    <modal
      name="login"
      :adaptive="true"
      :max-width="510"
      height="auto"
      class="authModal"
    >
      <span class="close-modal icon-close" @click="$modal.hide('login')"></span>
      <div class="authContent">
        <h3>Bejelentkezés</h3>
        <label class="auth-input">
          <input type="text" name="email" placeholder=" ">
          <span class="label-wrapper">
            <span>Email</span>
          </span>
        </label>
        <label class="auth-input">
          <input type="password" name="password" placeholder=" ">
          <span class="label-wrapper">
            <span>Jelszó</span>
          </span>
        </label>
        <a href="#" class="auth-link">Elfelejtett jelszó</a>
        <button class="big-btn" @click="fakeLogin">Bejelentkezés</button>
        <span class="auth-text">Nincs még fiókod?</span> <a href="#" @click="showRegister">Regisztrálok</a>
      </div>
    </modal>
    <modal
      name="register"
      :adaptive="true"
      :max-width="510"
      height="auto"
      class="authModal"
    >
      <span class="close-modal icon-close" @click="$modal.hide('register')"></span>
      <div class="authContent">
        <h3>Regisztráció</h3>
        <label class="auth-input">
          <input type="text" name="email" placeholder=" ">
          <span class="label-wrapper">
            <span>Email</span>
          </span>
        </label>
        <label class="auth-input">
          <input type="password" name="password" placeholder=" ">
          <span class="label-wrapper">
            <span>Jelszó</span>
          </span>
        </label>
        <label class="auth-input">
          <input type="password" name="password_confirm" placeholder=" ">
          <span class="label-wrapper">
            <span>Jelszó újra</span>
          </span>
        </label>
        <div class="agreed-check">
          <input type="checkbox" id="agreed" name="agreed">
          <label for="agreed">Elfogadom az <a href="#">Adatvédelmi Nyilatkozat</a>-ot.</label>
        </div>
        <button class="big-btn" @click="fakeLogin">Regisztráció</button>
        <span class="auth-text">Van már fiókod?</span> <a href="#" @click="showLogin">Bejelentkezés</a>
      </div>
    </modal>
  </div>
</template>

<style lang="scss">
.authModal {
  .vm--overlay {
    background: linear-gradient(to top, $color_black 0%, $color_purple 100%) 0% 0% no-repeat padding-box;
    opacity: .95;
  }
  .close-modal {
    position: absolute;
    right: 20px;
    top: 20px;
    background: transparent;
    border: none;
    color: $color_black;
    cursor: pointer;
    font-size: 16px;
  }
  .authContent {
    margin:70px 50px;
    h3 {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 0px;
      text-align: left;
    }
    .auth-input {
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
        font-weight: bold;
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
    a {
      text-decoration: none;
      color: $color_pink_darker;
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 0px;
    }
    .auth-link {
      display: block;
      margin-bottom:30px;
      text-align: left;
    }
    .big-btn {
      max-width: unset;
      margin-bottom: 50px;
    }
    .auth-text {
      font-size: 16px;
      letter-spacing: 0px;
      font-weight: normal;
    }
    .agreed-check {
      margin: 30px 0px;
    }
  }
}
</style>

<script>
export default {
  name: 'authModals',
  beforeDestroy () {
    this.$root.$off('showLogin', this.showLogin)
  },
  mounted () {
    this.$root.$on('showLogin', this.showLogin)
  },
  methods: {
    showLogin () {
      this.$modal.hide('register')
      this.$modal.show('login')
    },
    showRegister () {
      this.$modal.hide('login')
      this.$modal.show('register')
    },
    fakeLogin () {
      this.$modal.hide('login')
      this.$modal.hide('register')
      this.$store.commit('setLoggedin', true)
      this.$cookies.set('loggedin', true)
    }
  }
}
</script>
