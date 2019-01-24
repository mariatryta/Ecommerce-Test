<template>
  <div id="app">
    <top-bar></top-bar>
    <hero-img></hero-img>
    <list-products v-bind:products='products'></list-products>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import ListProducts from './components/ListProducts'
import TopBar from './components/Header'
import Hero from './components/Hero'
import BottomBar from './components/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components:{
    'list-products':ListProducts,
    'hero-img': Hero,
    'top-bar': TopBar,
    'bottom-bar':BottomBar
  },
   data() {
     return {
       products: [
        {name: 'Ryu', speciality: 'Vue Components'},
        {name: 'Crystal', speciality: 'HTML Wizardry'},
        {name: 'Hitoshi', speciality: 'Click Events'},
        {name: 'Tango', speciality: 'Conditionals'},
        {name: 'Kami', speciality: 'Webpack' },
        {name: 'Yoshi', speciality: 'Data Diggin'}
      ],
     }
   },
   methods: {
     
   },
}
</script>

<style>
html { font-size: 1rem; }

@media all and (max-width: 1200px) { /* screen size until 1200px */
    body {
        font-size: 1em; /* 1.5x default size */
    }
}
@media all and (max-width: 1000px) { /* screen size until 1000px */
    body {
        font-size: 1em; /* 1.2x default size */
        }
    }
@media all and (max-width: 500px) { /* screen size until 500px */
    body {
        font-size: 0.9em; /* 0.8x default size */
        }
}
</style>
