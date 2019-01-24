import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueResource from "vue-resource";
import VueCarousel from 'vue-carousel';

// Vue Carousel
Vue.use(VueCarousel);
// font awesome
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue http 
Vue.use(VueResource); 
// bootstrap
Vue.use(BootstrapVue);
//  Vue
Vue.config.productionTip = false
  // Event bus for passing data between components
export const bus = new Vue();
  // Main vue instance
new Vue({
  render: h => h(App),
}).$mount('#app')
