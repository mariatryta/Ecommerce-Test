<template>
<b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">Nokia</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/">Products</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <modal></modal>
        </b-navbar-nav>
        <!-- End right aligned -->
  </b-collapse>
</b-navbar>
</template>

<script>
import {bus} from '../main';
import Modal from './modal';

 
export default {
    components:{
        modal:Modal
    },
     data(){
        return{
            cart:{
                items:[]
            }
        }
    },
    created(){
    // using bus event to pass data 
      bus.$on('cartChanged',(items)=> {
        this.cart.items = items;
        console.log(this.cart.items);
      })
    }
    
}
</script>
