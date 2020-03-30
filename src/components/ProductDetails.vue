<template>
  <div>
      <div class="container product__details">
         <router-link class=" col__3-7" to="/">Go back More</router-link>
        <div class="Product_image">
          <img :src="product.image" />
        </div>

        <h3 class="product__title col__3-7">ProductName: {{product.productName}}</h3>
         <h5 class="product__price col__3-7"> Price: $ {{product.price}}</h5>
        <h5 class="product__cpu col__3-7">CPU: {{product.cpu}}</h5>
         <h5 class="product__ram col__3-7">RAM: {{product.ram}}</h5>
          <h5 class="product__storage col__3-7">Storage: {{product.storage}}</h5>
           <h5 class="product__screen col__3-7">Screen: {{product.screen}}</h5>
            <h5 class="product__description col__3-7">Description: {{product.description}}</h5>
       

       
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
    ...mapActions(["fetchProduct"])
  },
  created() {
 axios.get(`http://localhost:2000/api/routes/products/${this.id}`)
  .then((res) =>{
        // console.log(res.data)
        this.product = res.data
        for (const iterator of this.product) {
            console.log(iterator)
            this.product = iterator
        }
        // console.log(this.product)
  })



    // this.product = this.fetchProduct(this.id);
    // console.log(this.product)


    
  }
};
</script>

<style scoped>
.product__details{
  margin-top: 5em;
  display: grid;
  grid-template-columns:repeat(8, 1fr) 
 

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
  color: rgb(122, 18, 18);
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid ;
  background: none;
  text-align: center;
  width: 22.1%
}
</style>