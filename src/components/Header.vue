<template>
  <div class>
    <header>
      <nav class="header header__nav">
        <div class="header__Brand">
          <router-link to="/">Products</router-link>
        </div>
        <div class="toggle">
          <div @click="navItemss = !navItemss">
            <svg viewBox="0 0 200 60" width="40" height="20" class="svg">
              <rect class="rect" width="100" height="20" />
              <rect class="rect" y="30" width="100" height="20" />
              <rect class="rect" y="60" width="100" height="20" />
            </svg>
          </div>
        </div>

        <ul :class="changeClasses">
          <span
            class="inline"
            v-if="authState.isAuthenticated === null || authState.isAuthenticated === false"
          >
            <li>
              <router-link to="/signin">Sign Up</router-link>
            </li>
            <li>
              <router-link to="/login">Log In</router-link>
            </li>
          </span>
          <span
            class="inline"
            v-else-if="authState.isAuthenticated !== null || authState.isAuthenticated !== false"
          >
            <span class="auth-name">
              <!-- <li> -->
              <p>Welcome {{authState.user.name.toUpperCase()}}</p>
              <!-- </li> -->
            </span>

            <li>
              <div class="cart-icon">
                <router-link to="/cart">
                  <font-awesome-icon icon="shopping-cart" />
                  <span class="cart_length">{{AllCarts.length}}</span>
                </router-link>
              </div>
            </li>
            <li @click="userLogOut">
              <router-link to="/logout">Log Out</router-link>
            </li>
          </span>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      available: true,
      navItemss: false,
      item: " "
    };
  },
  methods: {
    ...mapActions([
      "userLogOut",
      "registerSuccess",
      "LogInSuccess",
      "fetchCarts"
    ])
  },
  computed: {
    ...mapGetters(["authState", "AllCarts"]),
    changeClasses: function() {
      return {
        navItemss: this.navItemss
      };
    }
  },
  created() {
    this.fetchCarts();
  }
};
</script>


<style scoped>
.header {
  background: var(--primary-color);
  box-shadow: 6px 2px 1px 1px;
  padding: 15px;
  touch-action: double-tap-zoom;
}
.header__nav {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.header__Brand {
  grid-column: 1/5;
  font-size: 1.8em;
  text-transform: uppercase;
  text-align: center;
}
.header__Brand a {
  padding: 21px;
}
.header__Brand a:hover {
  background: var(--semiPrimary-color);
  /* color: rgb(0, 60, 255); */
}
.header__nav ul {
  display: flex;
  justify-content: space-between;
  grid-column: 9/13;
  /* font-size: 1.3em; */
  text-transform: capitalize;
  padding: 10px;
}
.header__nav ul li a {
  padding: 26px 30px;
}
.header__nav ul li a:hover {
  background: var(--semiPrimary-color);
}
.cart-icon {
  position: relative;
  bottom: 2px;
  font-size: 17px;
  /* height: 10vh; */

  /* flex-basis: 25% !important; */
  height: 18px !important;
}
.header__Brand > ul li .cart-icon {
  padding: 1px 30px;
}
.header__nav > ul li .cart-icon :hover {
  /* background: var(--semiPrimary-color); */
  color: rgb(202, 59, 59);
}
.inline {
  display: inline-flex;
}
.auth-name {
  /* margin: 6em 0em; */
  /* font-size: 12px; */
  font-weight: bolder;
  /* color: #fff */
}
.img {
  position: relative;
  z-index: -1;
  height: 100vh;
  background-attachment: fixed;
  background: linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)),
    url("../assets/img/dell-xps-13.png") no-repeat center center/cover;
}
.img__text {
  height: 80vh;
  /* widows: 1110px; */
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
  background: var(--semiPrimary-color);
  padding: 5px 10px;
  border-radius: 10px 10px;
  font-size: 1em;
  margin: 0.7em;
}
.toggle {
  display: none;
}
.cart_length {
  position: absolute;
  font-size: 1em;
  left: 48px;
  top: 7px;
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
  .auth-name {
    /* margin: 6em 0em; */
    font-size: 12px;
    font-weight: bolder;
  }
}

@media screen and (max-width: 674px) {
  .header__Brand {
    grid-column: 7/10;
    font-size: 1em;
    /* padding-top: 6px; */
    padding: 6px;
  }
  .header__Brand a {
    padding: 7px 20px;
  }

  .header__nav ul {
    font-size: 0.6em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* color: #fff; */
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
  .inline {
    display: inline;
  }
  .toggle {
    display: block;
    /* position: fixed; */
    position: absolute;
    left: 20px;
    top: -1%;
    padding-top: 10px;
    color: #fff;
    cursor: pointer;

    /* background-color: #fff */
  }
  .auth-name {
    margin: 6em 0em;
    font-size: 12px;
    font-weight: bolder;
  }
  .svg {
    color: #fff;
  }

  .navItems,
  ul {
    position: absolute;
    background: var(--semiPrimary-color);
    height: 100vh;
    /* left: -75em; */
    z-index: 1;
    top: 3.1em;
    opacity: 0.9;
    display: none;
left: -0em;
    animation: fadeOut 1.5s ease-in-out forwards;
  }
  .navItemss {
    animation: fadeIn 1.5s ease-out forwards;
  }
  @keyframes fadeIn {
    0% {
      left: -75em;
    }
    100% {
      left: -0em;
    
    }
  }
  @keyframes fadeOut {
  0% {
      
       left: -0em;
    }
    100% {
     left: -75em;
    
    }
  }
}
</style>