<template>
  <v-card style="width: 100%">
    <v-card-title>
      <span class="pr-3">
        Transactions for {{ months[currentMonth].name }} - {{ currentYear }}
      </span>
      <v-btn flat icon class="pr-2" v-on:click="gotoMonth(-1)">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-btn flat icon class="pr-2" v-on:click="gotoCurrentMonth">
        <v-icon>today</v-icon>
      </v-btn>
      <v-btn flat icon v-on:click="gotoMonth(1)">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      >
      </v-text-field>
    </v-card-title>
    <v-data-table
      v-bind:headers="headers"
      v-bind:items="items"
      v-bind:search="search"

    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
