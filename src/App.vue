<template>
  <Header/>
  <Banner/>
  <Home/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'


export default {
  name: 'App',
  components: {
    Header,Footer,Banner,Home
  }, 
    data() {
      return {

      }
  },
}
</script>

<style>


</style>
