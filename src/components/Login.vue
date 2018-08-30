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
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
