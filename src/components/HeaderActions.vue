<template>
  <div class="d-flex align-center" style="margin-left: auto">
    <v-menu open-on-hover bottom offset-y>
      <v-btn icon slot="activtor">
        <v-icon>person</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-on:click="showProfile">
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Show Profile
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-on:click="logOut">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Logout
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>

    <v-dialog v-model="profileDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        profileDialog: false,
        user: {
          first: '',
          last: '',
          email: '',
          password: '',
          verfiyPassword: '',
          isActive: true
        }
      }
    },
    methods: {

    }
  }
</script>
