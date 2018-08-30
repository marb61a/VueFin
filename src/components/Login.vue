<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Login to VueFin</h2>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          label="Email"
          v-model="email"
          v-bind:rules="emailRules"
          required
        >
        </v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          v-bind:rules="passwordRules"
          v-bind:type="'password'"
          required
        >
        </v-text-field>
      </v-flex>
      <v-flex>
        <v-btn>Cancel</v-btn>
        <v-btn v-on:click="login">Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      emailRules: [
        v => !!v || 'Email is Required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is Required'
      ]
    }
  },
  methods: {
    login: function () {
      const vm = this;
      if(vm.password === 'test111'){
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>

<style>

</style>
