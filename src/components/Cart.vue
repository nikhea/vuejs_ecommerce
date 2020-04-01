
<template>
  <div class="Carts container">
    <h1>Carts</h1>
    <h1 v-if="AllCarts.length >= 1">You currenly have {{AllCarts.length}} items in your carts</h1>
    <h1 v-else>you currenly have no item in cart</h1>
    <div class="header Carts__grid">
      <p class="grid__Name">Name</p>
      <p class="grid__price">Price</p>
      <p class="grid__quantity">quantity</p>
      <p class="grid__subTotal">subTotal</p>
      <p class="grid__Actions">Actions</p>
    </div>
    <div v-for="carts in AllCarts" :key="carts.id" class="carts__backgroud">
      <div v-for="cart in carts.products" :key="cart.id" class="Carts__Products Carts__grid">
        <div class="grid__Name">{{cart.productName}}</div>
        <div class="grid__price">{{cart.price}}</div>
        <div class="grid__quantity">{{carts.quantity}}</div>
        <div class="grid__subTotal">{{cart.price * carts.quantity}}</div>
        <div class="grid__Actions">
          <span @click="carts.quantity++" class="Blue text_color">+</span>
          <span @click="deleteCarts(carts._id)" class="Black text_color">Clear</span>
          <span @click="carts.quantity--" class="Red text_color">-</span>
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
      subTotal: ""
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
}
.Carts__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
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
  padding: 10px;
  /* box-shadow: 2px 3px 4px 5px; */
  cursor: pointer;
}
</style>