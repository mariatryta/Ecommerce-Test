<template>
<footer>
    <p>You have total of {{cart.items.length}} items</p>
</footer>
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

