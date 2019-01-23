<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Nokia</a>
        <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapsable bar -->
        <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
            </ul>
            <!-- Search function -->
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search for Product">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
                <modal></modal>
        </div>
    </nav>
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
      bus.$on('cartChanged',(items)=> {
        this.cart.items = items;
        console.log(this.cart.items);
      })
    }
    
}
</script>
