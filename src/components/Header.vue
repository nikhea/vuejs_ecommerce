<template>
  <div class="header">
    <nav class="header__nav">
      <div class="header__Brand">
        <!-- <a href="#">Products</a> -->
        <router-link to="/">Products</router-link>
      </div>
      <ul>
         <li><router-link to="/cart">View cart </router-link>  </li>
       
        <li > <router-link to="/signin">Sign Up </router-link> </li>
        <li><router-link  to="/login">Log In </router-link>  </li>
        <li @click="userLogOut"><router-link to="/logout">Log Out </router-link>  </li>
       
      </ul>
    </nav>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
  name: "Header",
  data(){
    return{

    }
  },
  methods:{
    ...mapActions([
      'userLogOut', 
      'registerSuccess', 
      'LogInSuccess'
      ]),
    ...mapMutations(['setLogOut']),
   setLogOuts(){
      console.log(123)
    }
  },
  
};
</script>


<style scoped>
.header {
  background: rgb(192, 19, 19);
  box-shadow: 6px 2px 1px 1px;
  padding: 15px
}
.header__nav {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* background: url('../assets/img/asus-zenbook-flip-s.jpg') */
  
}
.header__Brand{
    grid-column: 3/5;
    font-size: 1.8em;
    text-transform: uppercase;
    text-align: center;
    /* padding: 10px 5px */
}
.header__Brand a{
  padding: 17px 5px
}
.header__Brand a:hover{
   background-color: rgb(122, 18, 18);
}
.header__nav ul {
  display: flex;
  justify-content: space-between;
  grid-column: 8/12;
  font-size: 1.3em;
  text-transform: capitalize;
    /* padding: 10px/ */
}
.header__nav ul li a{
   padding: 24.5px 5px;
 
}
.header__nav ul li a:hover{
    background-color: rgb(122, 18, 18);
}

</style>