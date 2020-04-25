
  
<template>
  <div id="app">
    <Header />

    <router-view />
    <Footer />
  </div>
</template>



<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions(["LoadUser", "LogInSuccess"])
  },
  computed: {
    ...mapGetters(["authState"])
  },
  created() {
    // console.log(this.authState.user.id)
  
   setInterval(() => {
     
     this.LoadUser(this.authState.user.id)
   }, 2000);
  }
};
</script>

<style >
:root {
  --primary-color: orange;
  --semiPrimary-color: #da930f;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
*:focus{
  outline: none;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #fff;
}
.container {
  width: 80%;
  margin: 0 auto;
}
img {
  width: 100%;
}
</style>
