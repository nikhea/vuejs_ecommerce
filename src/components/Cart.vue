
<template>
  <div class="Carts container">
    <div class="Carts__header">
      <h4>here's what you're getting!</h4>

      <hr>
       <router-link class="col__3-7 link" to="/">Go back</router-link>
     
      <!-- <h1>{{Carts.toUpperCase()}}</h1> -->
    </div>

    <div>
      <h1 v-if="AllCarts.length === 1">You currenly have {{AllCarts.length}} item in your order</h1>
      <h1
        v-else-if="AllCarts.length >= 2"
      >You currenly have {{AllCarts.length}} items in your orders</h1>
      <h1 v-else>you currenly have no item in cart</h1>
    </div>
    <div class="header Carts__grid">
      <p class="grid__Name">Name</p>
      <p class="grid__price">Price</p>
      <p class="grid__quantity">quantity</p>
      <p class="grid__subTotal">subTotal</p>
      <p class="grid__Actions">Actions</p>
    </div>
    <div v-for="carts in AllCarts" :key="carts.id" class="carts__backgroud">
      <div v-for="cart in carts.products" :key="cart.id" class="Carts__Products Carts__grid">
       <!-- <div><img :src="cart.image" alt="cart._id"/> </div> -->
        <div class="grid__Name">{{cart.productName}}</div>
        <div class="grid__price">{{cart.price}}</div>
        <div class="grid__quantity">{{carts.quantity}}</div>
        <div class="grid__subTotal">{{cart.price * carts.quantity}}</div>
        <div class="grid__Actions">
          <span @click="carts.quantity++" class="Blue text_color">+</span>
          <span @click="deleteCarts(carts._id)" class="Black text_color">Clear</span>
          <span @click="carts.quantity--" class="Red text_color">-</span>
          <!-- <v-btn color="black">
            <span @click="carts.quantity--" class=" text_color">-</span>
          </v-btn> -->
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      quantity: "",
      name: "",
      price: "",
      subTotal: "",
      Carts: "Carts"
      // AllCart: false
    };
  },
  components: {},
  methods: {
    ...mapActions(["fetchCarts", "deleteCarts"])
  },
  computed: {
    ...mapGetters(["AllCarts"])
    // ...mapActions(["fetchCarts"])
  },
  created() {
    this.fetchCarts();
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2em;
}
.Carts {
  margin-bottom: 20.6em;

  margin-top: 70px;
}
.Carts__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
}
.Carts__header{
   margin: 3em 0em;
   
}
.Carts__header h4{
  margin-bottom: 0.5em;
  font-size: 2em;
  font-weight: normal;
  text-transform: capitalize;
}
.header {
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 50px;
}
.grid__Name {
  grid-column: 1/5;
}
.grid__price {
  grid-column: 5/7;
}
.grid__quantity {
  grid-column: 7/8;
}

.grid__subTotal {
  grid-column: 8/10;
}
.grid__subTotal {
  grid-column: 8/10;
}
.grid__Actions {
  grid-column: 10/13;
}
.grid__Actions span {
  margin: 12px;
}
.Carts__quantity {
}
.Carts__Products {
  margin: 22px;
  padding: 10px;
}
.Carts__Products:nth-child(even) {
  background: gray;
}
.Carts__Products:nth-child(odd) {
  background: rgb(165, 159, 159);
  padding: 20px;
}
.Blue {
  background: blue;
}

.Red {
  background: red;
}

.Black {
  background: black;
}
.text_color {
  color: #fff;
  padding: 10px 25px;
  /* box-shadow: 2px 3px 4px 5px; */
  /* border:3px solid #fff ; */
  border-radius: 10px;
  cursor: pointer;
}

.link {
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid rgb(158, 149, 149);
  text-align: center;
  color: var(--semiPrimary-color);

  margin-top: 30px;
  display: inline-block;
  cursor: pointer;
}
@media screen and (max-width: 950px) {
  .Carts {
    width: 80%;
  }
  .Carts__grid p,
  div {
    font-size: 10px;
  }
  .grid__Actions > span {
    /* background-color: blue */

    font-size: 10px;
  }
}

@media screen and (max-width: 600px){
  *{
    /* width: 50vh; */
  }
 .Carts__grid > p,div{
   /* font-size: 10px */
 }
}
</style>














 npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/vue-fontawesome