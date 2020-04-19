
  
<template>
  <div id="app">
    <Header />

    <router-view />
    <Footer/>
  </div>
</template>



<script>
import Header from "./components/Header";
import Footer from './components/Footer'
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style >
:root{
  --primary-color:orange;
  --semiPrimary-color: orange;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 
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
