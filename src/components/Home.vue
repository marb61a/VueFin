<template>
  <div>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="(item, ndx) in menuItems">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="ndx"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" v-bind:key="ndx" no-action>
            <v-list-tile slot="item" @click="menuAction">
              <v-list-tile-action>
                <v-icon>
                  {{ item.model ? item.icon : item['icon-alt'] }}
                </v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="menuAction"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Transactions from './Transactions';
import EditTransactions from './EditTransactions';

export default {
  name: 'Home',
  components: {
    Transactions,
    EditTransactions
  },
  data: () => ({
    dialog: false,
    drawer: null,
    menuItems: [
      { icon: 'contacts', text: 'Add Transaction' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'content_copy', text: 'Notes' },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send Feedback' },
      { icon: 'help', text: 'Help' }
    ]
  }),
  methods: {
    menuAction: function () {
      //Todo
    },
    showProfile: function () {
      console.log('Profile show clicked');
    }
  }
}
</script>
