<template>
<div id="products">
        <div class="product-single"  v-for="(product,index) in products" :key="index">
            <carousel></carousel>
            <h2>{{product.name}}</h2>
            <p>{{product.speciality}}</p>
            <button class="link" @click="addToCart(product)">Add to cart</button>
        </div> 
</div>
</template>

<script>
import {bus} from '../main';
import Carousel from './carousel'

export default {
    components:{
        carousel:Carousel
    },
    props:{
        products:{
            type:Array,
            required:true        
        }
        
    },
    data(){
        return{
            cart:{
                items:[],
            },
       }
        
    },
    methods: {
        addToCart:function(product){
                    var cartItem = this.getCartItem(product);
                    if (cartItem != null) {
                        cartItem.quantity++;
                } else {
                    this.cart.items.push({
                    product: product,
                    quantity: 1
                    });
                }
                bus.$emit('cartChanged',this.cart.items);
        },
        getCartItem: function(product) {
         for (var i = 0; i < this.cart.items.length; i++) {
            if (this.cart.items[i].product.name === product.name) {
            return this.cart.items[i];
        }
      }
      return null;
    },
    },
}
</script>

<style>
#products{
    margin: 0 auto;
    width: 750px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-evenly;
    height:auto;
}

.product-single{
    width: 29%;
    padding: 10px 0;
}


</style>
