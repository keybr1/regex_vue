<template>
  <div>
    <v-app-bar
      dense
      dark
    >

      <v-toolbar-title>Regex Launch</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        @click="drawer = true"
        outlined
      >
        Challenges
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      overlay-opacity="0"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="blue-grey--text text--accent-4"
        >
          <v-list-item
            v-for="(challenge, i) in challenges"
            :key="i"
            @click="navigateToChallenge(i)"
          >
            <v-list-item-title>
              {{ `${i + 1} - ${challenge.name}` }}
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: true
  }),
  methods: {
    ...mapActions(['navigateToChallenge'])
  },
  computed: {
    ...mapState(['challenges', 'currIdx'])
  }
}
</script>
