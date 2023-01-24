<template>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Body
  }
}
</script>

<style src="./assets/style.css"></style>
