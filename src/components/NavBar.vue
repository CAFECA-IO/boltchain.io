<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" id="header-nav-bar" :class="{ 'header-nav-bar-white': scrolled }" v-on:scroll="handleScroll">
      <b-navbar-brand :to="{ path: '/' }" @click.native="scrollToTop()">
        <div class="nav-logo" style="background-image: url('./../../../img/2019/05/bolt_logo_5.png'); height: 40px;width: 166.66px;background-repeat: no-repeat;background-size: cover;" alt="logo"></div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown :text="$t('nav.about')" class="nav-item" right>
            <b-dropdown-item :to="{ path: '/', hash: '#about' }" @click.native="scrollFix('#about')">{{ $t('nav.aboutLink1') }}</b-dropdown-item>
            <b-dropdown-item :to="{ path: '/', hash: '#why' }" @click.native="scrollFix('#why')">{{ $t('nav.aboutLink2') }}</b-dropdown-item>
            <b-dropdown-item :to="{ path: '/', hash: '#case' }" @click.native="scrollFix('#case')">{{ $t('nav.aboutLink3') }}</b-dropdown-item>
            <!--<b-dropdown-item :to="{ path: '/', hash: '#' }" @click.native="scrollFix('#')">{{ $t('nav.aboutLink4') }}</b-dropdown-item>-->
            <b-dropdown-item :to="{ path: '/', hash: '#news' }" @click.native="scrollFix('#news')">{{ $t('nav.aboutLink5') }}</b-dropdown-item>
            <b-dropdown-item :to="{ path: '/', hash: '#team' }" @click.native="scrollFix('#team')">{{ $t('nav.aboutLink6') }}</b-dropdown-item>
            <b-dropdown-item :to="{ path: '/', hash: '#contact' }" @click.native="scrollFix('#contact')">{{ $t('nav.aboutLink7') }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown :text="$t('nav.product')" class="nav-item" right>
            <b-dropdown-item :to="{ path: 'bolt-trust' }" @click.native="scrollToTop()">{{ $t('nav.trust') }}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="nav-item nav-single-item"><router-link :to="{ path: 'technology' }" @click.native="scrollToTop()">{{ $t('nav.technology') }}</router-link></b-nav-item>

          <b-nav-item class="nav-item nav-single-item"><router-link :to="{ path: 'FAQ' }" @click.native="scrollToTop()">{{ $t('nav.faq') }}</router-link></b-nav-item>
          <div id="nav-bar"></div>
          <b-nav-item-dropdown :text="langBottom" class="nav-item" id="lang-dropdown" right>
            <b-dropdown-item @click="switchLang('tw')" v-model="langBottom" value="1">繁中</b-dropdown-item>
            <b-dropdown-item @click="switchLang('en')" v-model="langBottom" value="2">English</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import i18n from './../assets/i18n/index.js'
export default {
  name: "nav-bar",
  data: function () {
    return {
      langBottom: localStorage.getItem('locale') === 'en' ? 'English' : '繁中',
      scrolled: false,
      lastPosition: 0,
      limitPosition: 100,
    }
  },
  methods: {
    switchLang(newLang) {
      if(newLang==='en') {
        this.langBottom = 'English'
      } else {
        this.langBottom = '繁中'
      }
      i18n.locale = newLang
      localStorage.setItem('locale', newLang)
    },
    handleScroll() {
      if (this.lastPosition > this.limitPosition) {
        this.scrolled = true;
        // move up!
      } 
      
      if (this.lastPosition < this.limitPosition || this.lastPosition === 0) {
        this.scrolled = false;
        // move down
      }
      
      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 250;
    },
    scrollFix(hashbang) {
      location.href = hashbang;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  width: 100px;
  margin-top: -3px;
}
</style>