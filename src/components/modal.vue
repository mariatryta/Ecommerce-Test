<template>
  <div>
        <b-button size="sm" class="my-2 mx-3 my-sm-0" variant="success" @click="showModal">
        Show my cart
        </b-button>
        <b-modal ref="myModalRef" size="lg" hide-footer title="Your Cart">
            <b-container class="bv-example-row" v-for="item in cart.items">
                <b-row class="text-center">
                    <b-col class="text-center"> <h6>{{item.product.Name}}</h6></b-col>
                    <b-col> <label for="quantity">Quantity: </label><input type="number" name="number" id="input-qunatity" class="mx-2" v-model="item.quantity" min="0" style="width:50px; text-align:center;"></b-col>
                    <b-col><p>Price: {{item.quantity * parseInt(item.product.Price)}}</p></b-col>
                    <b-col ><font-awesome-icon icon="trash"  v-on:click='deleteItem(item)'/> </b-col>
                </b-row>
            </b-container>
            <hr>
            <p>Total Price: {{totalPrice}} </p>
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
                totalPrice += item.quantity * parseInt(item.product.Price);
            });
            return totalPrice;
        },
    }
}
</script>

<!-- modal-methods-1.vue -->
<style scoped>
    p,h6,label{
        padding: 0;
        margin: 0;
        vertical-align: middle;
    }
    .col{
          display: flex;
    justify-content: center;
    align-items: center;
    }
</style>
