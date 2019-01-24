<template>
<div class="bg-success py-2 mb-5 text-center">
    <span class="text-dark">You have total of {{cart.items.length}} items</span>
</div>
</template>

<script>
import {bus} from '../main';
 
export default {
    
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
      })
    }
}
</script>

