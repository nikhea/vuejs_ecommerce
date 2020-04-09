<template>
  <div class="main container">
    <router-link class="col__3-7 link" to="/">Go back</router-link>
    <div class=" product__details">
      <div class="Product_image">
        <img :src="product.image" />
      </div>
      <div class="product__text">
        <h3 class="product__title col__3-7">{{product.productName}}</h3>
        <h5 class="product__price col__3-7">Price: $ {{product.price}}</h5>
        <h5 class="product__cpu col__3-7">CPU: {{product.cpu}}</h5>
        <h5 class="product__ram col__3-7">RAM: {{product.ram}}</h5>
        <h5 class="product__storage col__3-7">Storage: {{product.storage}}</h5>
        <h5 class="product__screen col__3-7">Screen: {{product.screen}}</h5>
        <h5 class="product__description col__3-7">Description: {{product.description}} </h5>
     <a to="#" class="product__add link__small" @click="addToCart(product._id)">Add To Cart</a>
      </div>
    </div>
  </div>
</template>



<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Product_details",
  data() {
    return {
      id: this.$route.params.id,
      product: {}
    };
  },
  methods: {
    ...mapActions(["fetchProduct", "addToCart"])
  },
  created() {
    axios
      .get(`http://localhost:2000/api/routes/products/${this.id}`)
      .then(res => {
        // console.log(res.data)
        this.product = res.data;
        for (const iterator of this.product) {
          console.log(iterator);
          this.product = iterator;
        }
        // console.log(this.product)
      });

    // this.product = this.fetchProduct(this.id);
    // console.log(this.product)
  }
};
</script>

<style scoped>
/* .product__details{
  margin-top: 5em;
  display: grid;
  grid-template-columns:repeat(8, 1fr);
 
 
}
.Product_image{
  width: 90%;
  grid-column: 3/9
}
.product__title{
  
}
.product__price{
 
}
.product__description{
 background: gray;
 padding: 1em;
}
.col__3-7{
  grid-column:  3/8;
  margin: 15px 0px;
  font-size: 1.5em;
  font-weight: normal;
  text-align: justify
}
a{
/* background: blueviolet; */
/* color: rgb(122, 18, 18);
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid ;
  background: none;
  text-align: center;
  width: 22.1% */
/* }  */
.main {
}
.product__details {
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  /* background: rgb(238, 173, 52) ; */
  /* background: orange; */
  padding: 25px;
  box-shadow: 0px 5px 5px 0px;
  /* color: #fff */
}
.link {
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid rgb(158, 149, 149);
  text-align: center;
  color: #d88f08;

  margin-top: 20px;
  display: inline-block;
  cursor: pointer;
}
.link__small {
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid rgb(158, 149, 149);
  text-align: center;
  color: #888;

  margin-top: 20px;
  display: inline-block;
  cursor: pointer;
}
/* .link:hover {
  color: #fff;
  background: orange;
  border: none;
} */
.Product_image {
  grid-column: 1/5;
  width: 115%;
}
.product__text {
  grid-column: 6/9;
  /* color: #fff; */
  font-weight: normal;
  line-height: 150%;
 
}
.product__text > * {
  font-weight: normal;
  padding-top: 5px;
  font-size: 14px;
  text-align: justify 
}
.product__title {
  font-size: 30px;
}



@media screen and (max-width: 674px) {
  .product__details {
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 25px;
  /* box-shadow: 0px 5px 5px 0px; */
  display: block;
}
.Product_image {
  grid-column: 1/5;
  width: 100%;
  display: block;
 

}
}
</style>