<template>
  <div id="app">
    <Header />
    <div class="content">
      <transition mode="out-in" name='fade'>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/UI/Header';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang='scss'>
html, body {
  margin: 0;
}
body {
  background: $background;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-main;
}
*, :after, :before {
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  color: inherit;
  font: inherit;
  font-size: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.content {
  margin: 89px 50px 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
