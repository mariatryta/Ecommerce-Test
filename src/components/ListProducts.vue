<template>
<div class="list-products">
    <alert v-show="!cart.items === undefined || !cart.items.length == 0"></alert>
    <b-card-group deck style="width:80%; margin:0 auto" class="py-4">
        <b-card v-for="product in products"  tag="article" class="mb-2">
            <carousel :per-page="1"  :mouse-drag="false">
            <slide v-for="url in product.img" class="text-center">
                <img :src="url" style="max-width: 100%; height: 300px" class="mx-auto">
            </slide>
            </carousel>
            <h2>{{product.Name}}</h2>
            <p>{{product.Description}}</p>
            <p><b>{{product.Price}}</b></p>
            <b-link class="card-link" @click="addToCart(product)">Add to cart</b-link>
        </b-card>
    </b-card-group>
</div>
</template>

<script>
import {bus} from '../main';
import Alert from './alert'

export default {
    components:{
        'alert':Alert,
    },
    data(){
        return{
            cart:{
                items:[],
            },
            products:[],
            slide: 0,
            sliding: null
        }
    },
    created() {
        this.$http.get('https://jt-ecommerce-vue.firebaseio.com/Products.json').then(function(data){
          return data.json();
       }).then(function(data){
           this.products = data;
       })
    },
    methods: {
        addToCart:function(product){
            let cartItem = this.getCartItem(product);
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
        for (let i = 0; i < this.cart.items.length; i++) {
            if (this.cart.items[i].product.Name === product.Name) {
                return this.cart.items[i];
            }
        }
            return null;
        },
        onSlideStart (slide) {
        this.sliding = false
        },
        onSlideEnd (slide) {
        this.sliding = false
        },
    },
}
</script>

<style >

</style>
