<template>
  <footer>
    <div class="row footer-nav container">
      <div>
        <ul>
          <li>
            <router-link to="/about">About us</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Ios App</a>
          </li>
          <li>
            <a href="#">Android App</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- <div class="contact">
      <form class="row">
        <input type="email" required placeholder="send us feedBack" />
        <button>Submit</button>
      </form>
    </div>-->
    <div class="row social__links">
      <ul>
        <!-- <li>
          <a href="#">facebook</a>
        </li>
        <li>
          <a href="#">tiwtter</a>
        </li>
        <li>
          <a href="#">what's App</a>
        </li>-->
        <li>
          <a href="#">
            <img src="../assets/img/Group 3.svg" alt="my " />
          </a>
        </li>
      </ul>
    </div>
    <div class="row container footer__copy">
      <!-- <p>copyright &COPY; 2020 by laptops store. <span class="footer__span"> All rights reserved.</span></p> -->
      <p>
        copyright &COPY; 2020 by FortuneTech.
        <span class="footer__span">All rights reserved.</span>
      </p>
    </div>
  </footer>
</template>



<script>
export default {
  name: "Footer"
};
</script>


<style scoped>
footer {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-top: 72px;
  background: rgb(110, 79, 20);
  padding: 20px;
  color: #fff;
  /* background-color: rgb(41, 39, 39); */
  padding: 50px;
  font-size: 80%;
}
.row {
  display: flex;
}
.footer-nav {
  grid-column: 1/5;
}
ul {
  display: flex;
}
li {
  padding: 0 1.2em;

  padding-bottom: 2em;
}
li a:hover {
  color: orange;
}
.social__links {
  grid-column: 7/9;
}

.footer__copy {
  grid-column: 4/7;
  /* margin-right: 150px; */
  /* margin-top: 30px */
}
.contact {
  grid-column: 5;
  margin-bottom: 30px;
  /* outline: orange; */
  border: none;
  margin-top: 0;
}
input {
  margin: 0px 10px;
  padding: 6px;
  padding-right: 60px;
  flex-basis: 0 20px;
  border: none;
  outline: none;
  font-size: 16px;
}
button {
  border: 1px solid var(--semiPrimary-color);
  margin: 0 10px;
  padding: 5px 10px;
  /* background: orange */
  color: #fff;
  background: none;
}
button:hover {
  background: var(--semiPrimary-color);
  color: #fff;
}
img {
  width: 250%;
  color: #fff;
}

img:hover {
  /* background-color: #d88f08 */
}
@media screen and (max-width: 674px) {
  footer {
    /* text-align: center */
    font-size: 80%;
  }
  ul {
    font-size: 80%;
    padding: 0 0em;
  }
  li {
    padding: 0 0.3em;

    padding-bottom: 2em;
  }
  .footer-nav {
    grid-column: 2/9;
  }
  .social__links {
    grid-column: 4/9;
  }
  .footer__copy {
    grid-column: 2/9;
    font-size: 85%;
  }

  img {
    width: 150%;
    color: #fff;
  }
}
</style>