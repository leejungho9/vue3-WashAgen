<template>
  <Header/>
  <router-view :eventDatas="eventDatas"> </router-view>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import eventDatas from "./assets/event.js"


export default {
  name: 'App',
  components: {
    Header,Footer
  }, 
    data() {
      return {
        eventDatas:eventDatas
      }
  },
 
}
</script>

<style>


</style>
