<template>
    <div class="form">
       <form @submit="Login"> 
           <h2>Log In</h2>
           <input type="text" v-model="form.name"  placeholder="name" />
           <input type="email" v-model="form.email" placeholder="email" />
           <input type="password" v-model="form.password" placeholder="password" />
           <input type="text" v-model="form.nickname" placeholder="nickname" />
           <input  @click="LogInSuccess"  type="submit" placeholder="sign in" />
       </form>
       <h4><router-link to="/signin">Create account</router-link></h4>
    </div>
</template>



<script>
import {mapActions, mapMutations} from 'vuex'
export default {
    name:"LogIn",
    data(){
      return{
          form:{
              name: "Fortune",
              email:"text@text.com",
              password: "1234",
              nickname: "Nikhea"
          }
      }
    },
    methods:{
        Login: function(e) {
            e.preventDefault()
            //  this.LogInSuccess()
        },
     ...mapActions([
      'userLogOut', 
      'registerSuccess', 
      'LogInSuccess'
      ]),
    ...mapMutations(['setLogOut']),
   setLogOuts(){
      console.log(123)
    }
    }
}
</script>



<style scoped>
.form{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh; 

  } 
 form{
  border: 2px solid blue;
  padding: 30px
 }
input{
    display: block;
    margin: 20px;
    padding: 5px 10px
}
h4, a{
    color: blue;
}
</style>