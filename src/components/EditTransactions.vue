<template>
  <div>
    <v-btn
      fab
      bottom
      right
      color="orange"
      dark
      fixed
      @click.stop="showEditTransactionDialog"
    >
      <v-icon>Add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          New Transaction
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12>
              <v-menu
                ref="datePicker"
                lazy
                :close-on-content-click="false"

              >

              </v-menu>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
