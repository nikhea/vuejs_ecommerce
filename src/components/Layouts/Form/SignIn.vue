<template>
  <div class="form">
    <form @submit="SignUp">
      <h2>Sign Up</h2>
      <input type="text" v-model="name" placeholder="name" />
      <input type="email" v-model="email" placeholder="email" />
      <input type="password" v-model="password" placeholder="password" />
      <input type="text" v-model="nickname" placeholder="nickname" />
      <input type="submit" placeholder="sign in" />
    </form>
    <h4>
      <router-link to="/login">already have an account</router-link>
    </h4>
  </div>
</template>



<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "signIn",
  data() {
    return {
      name: "Fortune",
      email: "text@text.com",
      password: "1234",
      nickname: "12"
    };
  },
  methods: {
    SignUp: function(e) {
      e.preventDefault();
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
        nickname: this.nickname
      };
      console.log(newUser)
      this.registerSuccess(newUser);
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
  text-align: center;
  height: 100vh;
}
form {
  border: 2px solid blue;
  padding: 30px;
}
input {
  display: block;
  margin: 20px;
  padding: 5px 10px;
}
h4,
a {
  color: blue;
}
</style>