<template>
  <div>
    <Landing />
    <div class="padding">
      <p>since 1997, the soucre of good and qualitiy laptops</p>
    </div>
    <div class="container products">
      <div class="product" v-for="product in AllProducts" :key="product.id">
        <div class="card">
          <div class="Product_image">
            <img :src="product.image" />
          </div>
          <div class="card__text">
            <h3 class="card__title">{{product.productName}}</h3>
            <p class="card__price">$ {{product.price}}</p>
            <router-link class="card__show" :to="'/product/' + product._id">Show More</router-link>
            <a class="product__add" @click="addToCart(product._id)">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Landing from "./Landing";
export default {
  name: "Products",
  components: {
    Landing
  },
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
  transition: 0.4s;
}

.padding {
  /* background: rgb(192, 19, 19); */
  background: #d88f08;
  font-size: 30px;
  padding: 30px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: normal;
}

.card {
  width: 100%;
  padding: 1em;
  /* border: 2px solid rgb(114, 8, 8); */
  box-shadow: 1px 1px 8px 0px;
  padding: 0;
  padding-bottom: 20px;
  text-align: center;
  margin-bottom: 15px;
  transition: 2s
}
.card:hover {
  opacity: 0.7;
  transform: scale(0.9);
  /* transform: scale(1.2); */
  /* margin: 50px */

}
.card__title {
  margin: 1em 0;
  font-size: 1.5em;
}
.card__price {
  margin: 1em 0;
  font-size: 1.2em;
  /* background: gray; */
}
.card a {
  /* background: blueviolet; */
  /* background: rgb(122, 18, 18); */
  background: #d88f08;
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
}
.card a:hover {
  /* background: blueviolet; */
  /* color: rgb(122, 18, 18); */
  color: orange;
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid;
  background: none;
}
/* .padding {
  background: rgb(192, 19, 19);
  width: 100vw;
  position: absolute;
  bottom: 21rem;
  padding: 30px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
} */
@media screen and (max-width: 674px) {
  .products {
    margin-top: 3em;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
  .Product_image {
  }
  .card {
    width: 100%;
    padding: 1em;
    padding: 0;
    padding-bottom: 20px;
    text-align: center;
  }
  .card__text {
  }
  .card__title {
    margin: 1em 0;
    font-size: 1em;
  }
  .card__price {
    margin: 1.5em 0;
    font-size: 1em;
    /* background: gray; */
  }

  .card a {
    /* background: blueviolet; */

    padding: 5px 10px;
    border-radius: 10px 10px;
    font-size: 1em;
    margin: 0.6em;
  }
  .card a:hover {
    font-size: 1.1em;
  }
  .padding {
    width: 100vw;
    position: absolute;
    /* bottom: 21rem; */
    padding: 20px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-weight: normal;
    font-size: 17px;
  }
}
</style>