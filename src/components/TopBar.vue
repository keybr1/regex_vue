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
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
}
</script>
