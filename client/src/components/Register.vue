<template>
  <div>
    <input 
    type="email"
    name="email"
    placeholder="email"
    v-model="email"
    >
    <input 
    type="password"
    name="password"
    placeholder="password"
    v-model="password"
    >
    <button
    class="btn btn-medium btn-primary"
    @click="register"
    >Register</button>
  </div>
  </div>
</template>

<script>

// @ is an alias to /src
import Authentication from "../../services/AuthenticationServices";
export default {
  email: "",
  password: "",
  methods: {
     async register () {
        console.log({
            "email": this.email,
            "pw": this.password
        });
         const response = await Authentication.register({
              email: this.email,
              password: this.password
          });
          console.log(response.data); 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
