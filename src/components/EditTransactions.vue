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
                v-model="transactionDatePicker"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                max-width="290px"
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  label="Select Transaction Date"
                  v-model="transaction.transactionDate"
                  prepend-icon="event"
                  readonly
                >
                </v-text-field>
                <v-date-picker
                  v-model="transaction.transactionDate"
                  v-on:input="$refs.datePicker.save(transaction)"
                >
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12>
              <v-select
                prepend-icon="credit_card"
                v-bind:items="transactionTypes"
                v-model="transaction.transactionType"
                label="Transaction Type"
                single-line
                bottom
              >
              </v-select>
            </v-flex>
            <v-flex xs12>

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
