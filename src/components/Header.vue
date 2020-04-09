<template>
  <div class>
    <header>
      <nav class="header header__nav">
        <div class="header__Brand">
          <router-link to="/">Products</router-link>
        </div>
        <div class="toggle">
          <div @click="navItemss = !navItemss">open</div>
        </div>
        <ul :class="changeClasses">
          <li>
            <router-link to="/cart">View cart</router-link>
          </li>

          <li>
            <router-link to="/signin">Sign Up</router-link>
          </li>
          <li>
            <router-link to="/login">Log In</router-link>
          </li>
          <li @click="userLogOut">
            <router-link to="/logout">Log Out</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      available: true,
      navItemss: true
    };
  },
  methods: {
    ...mapActions(["userLogOut", "registerSuccess", "LogInSuccess"]),
    ...mapMutations(["setLogOut"]),
    setLogOuts() {
      console.log(123);
    }
  },
  computed: {
    changeClasses: function() {
      return {
        navItemss: this.navItemss
      };
    }
  }
};
</script>


<style scoped>
.header {
  /* background: rgb(192, 19, 19); */
  background: orange;
  box-shadow: 6px 2px 1px 1px;
  padding: 15px;
}
.header__nav {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.header__Brand {
  grid-column: 3/5;
  font-size: 1.8em;
  text-transform: uppercase;
  text-align: center;
  /* padding: 10px 5px */
}
.header__Brand a {
  padding: 21px;
}
.header__Brand a:hover {
  /* background-color: rgb(122, 18, 18); */
  background: #d88f08;
}
.header__nav ul {
  display: flex;
  justify-content: space-between;
  grid-column: 8/12;
  /* font-size: 1.3em; */
  text-transform: capitalize;
  padding: 10px;
}
.header__nav ul li a {
  padding: 26px 8px;
}
.header__nav ul li a:hover {
  /* background-color: rgb(122, 18, 18); */
  background: #d88f08;
}
.img {
  position: relative;
  height: 100vh;
  background-attachment: fixed;
  background: linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)),
    url("../assets/img/dell-xps-13.png") no-repeat center center/cover;
}
.img__text {
  height: 80vh;
  widows: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}
.img__text h3 {
  margin-bottom: 5px;
  font-size: 2em;
}
.img__text p {
  font-size: 1.5em;
}
.img__text a {
  /* background: rgb(122, 18, 18); */
  background: #d88f08;
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1em;
  margin: 0.7em;
}
.toggle {
  display: none;
}
@media screen and (max-width: 900px) {
  .header {
    padding: 0px;
  }
  .header__nav {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }
  .header__Brand {
    grid-column: 1/2;
    font-size: 1.5em;
    padding-top: 5px;
  }
  .header__Brand a {
    padding: 11px;
  }
  .header__nav ul {
    grid-column: 5/9;
    font-size: 1em;
    text-transform: capitalize;
  }
  .header__nav ul li a {
    padding: 11px 5px;
  }
}

@media screen and (max-width: 674px) {
  .header__Brand {
    grid-column: 7/10;
    font-size: 1em;
    /* padding-top: 6px; */
    padding: 6px
  }
  .header__Brand a {
    padding: 7px 20px;
  }

  .header__nav ul {
    font-size: 0.6em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #fff;
    /* display: none; */
  }

    .header__nav li {
     font-size: 200%;
     padding: 15px 30px;
     margin-top: 20px;
   }
   .header__nav ul li a {
     padding: 3px 10px;
   }
 
  .toggle {
    display: block;
    position: fixed;
    left: 20px;
    top: -1%;
    padding-top: 10px;
  }

  .navItems,ul {
    position: absolute;
    background: #d88f08;
    height: 100vh;
    z-index: 1;
    top: 3.1em;
    opacity: 0.9;
    display: block;
  }
  .navItemss {
    left:  -75em;
  }
}
</style>