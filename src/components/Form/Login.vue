<template>
  <div class="form">
    <h2>Log In</h2>
    <form @submit="Login">
      <!-- <div class="form-group">
        <label for>Name</label>
        <input type="text" v-model="name" placeholder="name" required />
      </div> -->

      <div class="form-group">
        <label for>Email</label>
        <input type="email" v-model="form.email" placeholder="email" required />
      </div>

      <div class="form-group">
        <label for>Password</label>
        <input type="password" v-model="form.password" placeholder="password" required />
      </div>

      <!-- <div class="form-group">
        <label for>Nickname</label>
        <input type="text" v-model="nickname" placeholder="nickname" required />
      </div> -->
      <div class="form-group">
        <button>Log In</button>
      </div>
    </form>
    <h4>
      <router-link to="/signin">don't have an account? Create account</router-link>
    </h4>
  </div>
</template>



<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "LogIn",
  data() {
    return {
      form: {
        // name: "Fortune",
        email: "text@text.com",
        password: "1234",
        // nickname: "Nikhea"
      }
    };
  },
  methods: {
    Login: function(e) {
      e.preventDefault();
      const user = {
        email: this.form.email,
        password: this.form.password
      }
       this.LogInSuccess(user)
    },
    ...mapActions(["userLogOut", "registerSuccess", "LogInSuccess"]),
    ...mapMutations(["setLogOut"]),
    setLogOuts() {
      console.log(123);
    }
  }
};
</script>



<style scoped>
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  height: 100vh;
  /* width: 50vw */
}
form {
  margin: 20px;
  background: orange;
  padding: 70px;
  border-radius: 50px;
  box-shadow: 1px 2px 8px 2px;
}
.form-group {
  display: flex;
  flex-direction: column;
     
}
label {
  text-align: center;
  margin-top: 13px;
}
input {
  margin: 10px 0px;
  padding: 9px;
  padding-right: 100px;
  flex-basis: 0 20px;
  border: none;
  outline: none;
  font-size: 16px;
}
input, button{
      background: #fff;
}
button {
  margin: 20px 0px;
  padding: 8px;
  border: none;
  font-size: 19px;
}
button:hover {
  background: #d88f08;
  color: #fff;
}
h4,
a {
  color: blue;
}
@media screen and (max-width: 674px) {
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  /* width: 20vw */
}
form {
  margin: 20px;
  background: orange;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 2px 8px 2px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
label {
  text-align: center;
  margin-top: 13px;
}
input {
  margin: 5px 0px;
  padding: 7px;
  padding-right: 70px;
  
  border: none;
  outline: none;
  font-size: 16px;
}
button {
  margin: 20px 0px;
  padding: 8px;
  border: none;
  font-size: 19px;
}
button:hover {
  background: #d88f08;
  color: #fff;
}
}
</style>