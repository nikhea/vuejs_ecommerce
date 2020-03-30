<template>
  <div>
    <div class="container products">
      <div class="product" v-for="product in AllProducts" :key="product.id">
        <div class="card">
          <div class="Product_image">
            <img :src="product.image" />
          </div>

          <h3 class="card__title">{{product.productName}}</h3>
          <p class="card__price">$ {{product.price}}</p>
          <router-link :to="'/product/' + product._id">Show More</router-link>
          <a @click="addToCart(product._id)">Add To Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  components: {},
  methods: {
    ...mapActions(["fetchProducts", "addToCart"])
  },
  computed: {
    ...mapGetters(["AllProducts"])
  },
  created() {
    this.fetchProducts();
  }
};
</script>
<style scoped>
a {
  cursor: pointer;
}
.products {
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.Product_image {
  width: 100%;
}
.card {
  width: 100%;
  padding: 1em;
  border: 2px solid rgb(114, 8, 8);
  box-shadow: 1px 1px 1px 1px;
  /* margin: 0; */
  padding: 0;
  padding-bottom: 15px;
  text-align: center;
}
.card__title {
  margin: 1em 0;
  font-size: 1.5em
}
.card__price {
  margin: 1em 0;
  font-size: 1.2em;
  /* background: gray; */
}
.card a {
  /* background: blueviolet; */
  background: rgb(122, 18, 18);
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
}
.card a:hover{
  /* background: blueviolet; */
  color: rgb(122, 18, 18);
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid ;
  background: none
}
</style>