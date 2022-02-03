<template>
  <div ref="login" class="login">
    <v-text-field label="ID" v-model="loginInfo.userId"></v-text-field>
    <v-text-field label="PASSWORD" v-model="loginInfo.password"></v-text-field>
    <v-btn @click="login">Login</v-btn>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data: () => ({
    loginInfo: {
      userId: null,
      password: null,
    },
  }),
  computed: {
    ...mapMutations(["setUserInfo"]),
  },
  methods: {
    async login() {
      const result = await this.$http.get(
        `/login?userId=${this.loginInfo.userId}&password=${this.loginInfo.password}`
      );

      if (0 === result.data.length) return;

      sessionStorage.setItem("userName", result.data.userName);
      sessionStorage.setItem("email", result.data.email);

      this.$router.push({ name: "layout" }).catch(() => {});
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.login {
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  height: 450px;
  text-align: center;
  padding: 60px;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 10px 0px;
  padding-top: 3%;
  padding-bottom: 3%;
  font-family: "Poppins", sans-serif;
}

/* .login {
    width: 60%;
    height: 70vh;
    border-radius: 10px;
    border: 1px solid;
    position: absolute;
} */

v-text-field {
  border-radius: 3rem;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  margin: 10px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

v-text-field:hover {
  box-shadow: 0px 0px 5px 0px;
}

v-text-field:active {
  box-shadow: 0px 0px 5px 0px;
}
</style>