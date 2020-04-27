<template>
  <div>
    <SearchBox v-model="searchProduct" />

    <Landing />
    <div class="padding">
      <!-- <p>since 1997, the soucre of good and qualitiy laptops</p> -->
      <p>since 1997, the soucre of good and qualitiy electronics</p>
    </div>

    <Cards />
    <div class="search__product container">
      <input type="text" v-model="searchProduct" placeholder="Search for  Product" />
    </div>

    <div class="container products">
      <div class="product" v-for="product in filterProducts" :key="product.id">
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
// import Cards from "./Cards";
// import SearchBox from './SearchBox'
export default {
  name: "Products",
  components: {
    Landing
    // Cards
    // SearchBox
  },
  data() {
    return {
      searchProduct: "",
      IfProduct: ""
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "addToCart"])
  },
  computed: {
    ...mapGetters(["AllProducts"]),
    filterProducts: function() {
      if (this.searchProduct) {
        let search = this.searchProduct.toUpperCase();
        console.log(search);
        return this.AllProducts.filter(AllProduct => {
          return AllProduct.productName.toUpperCase().match(search);
          // return AllProduct.productName.indexOf(this.searchProduct) !== -1;
        });
      } else {
        return this.AllProducts;
      }
    }
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
  background: var(--semiPrimary-color);
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
  box-shadow: 1px 1px 8px 0px;
  padding: 0;
  padding-bottom: 20px;
  text-align: center;
  margin-bottom: 15px;
  transition: 2s;
}
.card:hover {
  opacity: 0.8;
  transform: scale(0.9);
  /* transform: scale(1.2); */
  margin: 10px 0px;
  /* border-radius: 30px 30px;  */
}
.card__title {
  margin: 1em 0;
  font-size: 1.5em;
}
.card__price {
  margin: 1em 0;
  font-size: 1.2em;
}
.card a {
  background: var(--semiPrimary-color);
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
}
.card a:hover {
  color: orange;
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1.5em;
  margin: 0.6em;
  border: 2px solid;
  background: none;
}
.search__product {
  /* background: blue; */
  display: block;
  /* margin: 0 auto; */
  margin: 4em auto;
  margin-right: 20em;
  width: 100vh;
  /* margin-top: 4em; */
}
.search__product > input {
  width: 40vw;

  border-bottom: 1px solid rgb(77, 74, 74);
}
.search__product > input:focus {
  width: 40vw;

  border-bottom: 2px solid rgb(77, 74, 74);
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
    margin-top: -3em;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    position: relative;
  }
  .Product_image {
  }
  .card {
    width: 100%;
    padding: 1em;
    padding: 0;
    padding-bottom: 20px;
    text-align: center;
    position: relative;
    top: 2.5em;
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

  .search__product {
    display: block;
    margin: 4em auto;
    margin-right: 20em;
    width: 500vh;
  }
  .search__product > input {
    margin-top: 2em;
    margin-left: 3em;
    width: 70vw;
    margin-bottom: 0em;
    border-bottom: 1px solid rgb(77, 74, 74);
  }
  .search__product > input:focus {
    width: 70vw;

    border-bottom: 2px solid rgb(77, 74, 74);

  }
  .search__product > input:active {
  }
}
</style>