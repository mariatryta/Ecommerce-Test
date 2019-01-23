<template>
  <div>
    <b-button @click="showModal">
      Show my cart
    </b-button>
    <b-modal ref="myModalRef" hide-footer title="Your Cart">
      <div class="d-block text-center" v-for="item in cart.items">
        <h4>{{item.product.name}}</h4>
        <input type="number" name="number" id="input-qunatity" v-model="item.quantity" min="0">
        <p>Price: {{item.quantity * 200}}</p>
        <font-awesome-icon icon="trash"  v-on:click='deleteItem(item)'/> 
      </div>
      <hr>
        <p>Total Price: "{{totalPrice}}" </p>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
    </b-modal>
  </div>
</template>

<script>
import {bus} from "../main";
export default {
    data(){
        return{
            cart:{
                items:[

                ]
            }
        }
    },
  methods: {
        showModal () {
        this.$refs.myModalRef.show()
        },
        hideModal () {
        this.$refs.myModalRef.hide()
        },
        deleteItem (item){
            let index = this.cart.items.indexOf(item);
        
            if (index !== -1) {
                this.cart.items.splice(index, 1);
                console.log("new" + this.cart.items);
            }
        }
    },
    created(){
      bus.$on('cartChanged',(items)=> {
        this.cart.items = items;
        console.log(this.cart.items);
      })
    },
    computed:{
        // total price of cart
        totalPrice: function() {
            let totalPrice = 0;
            this.cart.items.forEach(function(item) {
                totalPrice += item.quantity * 100;
            });
            return totalPrice;
        },
    }
}
</script>

<!-- modal-methods-1.vue -->