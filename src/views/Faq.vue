<template>
  <div class="faq container text-left pb-5">
    <router-link to="/" class="backhome">Főoldal</router-link>
    <h3>Gyakran ismételt kérdések</h3>
    <hr/>
    <h4>Fizetés és kézbesítés</h4>
    <div class="faq-tabs">
      <input type="checkbox" id="item1" class="faq-accordion">
      <div class="faq-tab">
        <label for="item1">Milyen fizetési lehetőségeim vannak?</label>
        <div>Aliquam eleifend id felis vel venenatis. Proin imperdiet porta lacus ac fermentum. In malesuada purus semper, pellentesque sem ac, gravida dui. Cras vulputate justo nec urna posuere gravida. Suspendisse diam turpis, finibus sed ligula et, convallis elementum velit.</div>
      </div>
      <input type="checkbox" id="item2" class="faq-accordion">
      <div class="faq-tab">
        <label for="item2">Milyen szállítási opciók vannak?</label>
        <div>Ut at elementum arcu, nec rhoncus dolor. Sed maximus dignissim sem, eget aliquam mauris scelerisque nec. </div>
      </div>
    </div>
    <h4>Problémám merült fel az oldalon</h4>
    <div class="faq-tabs">
      <input type="checkbox" id="item3" class="faq-accordion">
      <div class="faq-tab">
        <label for="item3">Milyen szállítási opciók vannak?</label>
        <div>Sed finibus orci at purus dignissim, ac hendrerit tortor sagittis. Aenean dapibus condimentum lectus. Suspendisse hendrerit enim vel enim aliquet accumsan. Phasellus lacus tortor, molestie at pellentesque sed, tincidunt in sem. </div>
      </div>
      <input type="checkbox" id="item4" class="faq-accordion">
      <div class="faq-tab">
        <label for="item4">Milyen szállítási opciók vannak?</label>
        <div>Ut fringilla aliquam orci, vitae pulvinar elit rhoncus id.</div>
      </div>
    </div>
    <h4>Mit tegyek, ha nem vagyok elégedett a rendelt termékkel?</h4>
    <div class="faq-tabs">
      <input type="checkbox" id="item5" class="faq-accordion">
      <div class="faq-tab">
        <label for="item5">Mit tegyek, ha nem vagyok megelégedve a rendelt termékekkel?</label>
        <div>Phasellus vel varius nulla. Duis maximus augue at lorem placerat, at tempus massa mollis. </div>
      </div>
      <input type="checkbox" id="item6" class="faq-accordion">
      <div class="faq-tab">
        <label for="item6">Levásárolhatnám az összeget, ha nem vagyok megelégedve?</label>
        <div>Etiam tempus id neque at suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget ex ut odio ultricies efficitur.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.faq {
  h3 {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0px;
    margin:5px 0 0 0;
    color: $color_black;
  }
  hr {
    height: 5px;
    width: 100%;
    background: $color_pink_darker;
  }
  h4 {
    font-size: 28px;
    letter-spacing: 0px;
    margin:30px 0px;
    font-weight: 500;
    color: $color_black;
  }
  .faq-tabs {
    .faq-accordion {
      position: absolute;
      opacity: 0;
      z-index: -1;
      &:checked {
        + .faq-tab {
          box-shadow: 0px 3px 20px $color_pink_darker_half;
          label {
            color: $color_white;
            &:before {
              opacity: 1;
            }
          }
          div {
            height: auto;
            padding: 30px 40px 60px 40px;
          }
          &:before {
            opacity: 0;
            transform:scaleY(0);
          }
          &:after {
            background: $color_white;
          }
        }
      }
    }
    .faq-tab {
      width: 100%;
      color: $color_black;
      overflow: hidden;
      transition: .2s ease-out;
      border-radius: 5px;
      position: relative;
      label {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        position: relative;
        padding: 25px 40px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          transition: .2s ease-out;
          background: linear-gradient(to right, $color_pink_darker 0%, $color_pink_light 100%);
          z-index: -1;
          opacity: 0;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
        }
      }
      div {
        height: 0;
        color: $color_black;
        transition: .2s ease-out;
        padding: 0 40px;
        font-size: 16px;
        letter-spacing: 0px;
        font-weight: 400;
      }
      &:after {
        content: '';
        width: 16px;
        height: 2px;
        background: $color_black;
        position: absolute;
        right: 45px;
        top: 39px;
        z-index: 1;
        display: block;
        transition: .2s ease-out;
      }
      &:before {
        content: '';
        width: 2px;
        height: 16px;
        background: $color_black;
        position: absolute;
        right: 52px;
        top: 32px;
        z-index: 1;
        display: block;
        transition: .2s ease-out;
        transform-origin: center;
      }
    }
  }
}

@media (max-width: 576px) {
  .faq {
    .faq-tabs {
      .faq-accordion {
        &:checked {
          + .faq-tab {
            div {
              padding: 30px 15px 60px 15px;
            }
          }
        }
      }
      .faq-tab {
        label {
          padding: 25px 40px 25px 15px;
        }
        div {
          padding: 0 15px;
        }
        &:after {
          right: 15px;
        }
        &:before {
          right: 22px;
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
      title: 'Beni\'s - GYIK'
    }
  }
}
</script>
