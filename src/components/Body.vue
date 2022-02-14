<template>
  <v-row>
    <v-col sm="10">
      <v-row>
        <v-col cols="12">
          <h2
            v-html="$options.filters.highlightFilter(
              $store.getters.currChallenge.fullText, userRegex, $style)"
            class="mt-5 mb-4"
          ></h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-text-field
            v-model="userRegex"
            placeholder="Enter Regex"
            @keypress.enter.stop="nextChallenge"
            outlined
          >
            <template v-slot:prepend>
            /
            </template>
            <template v-slot:append-outer>
            /
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            disabled
            v-model="userFlags"
            placeholder="Enter Flags"
            @keypress.enter="this.$store.getters.nextChallenge"
            outlined
          >
          </v-text-field>
        </v-col>

      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card
            outlined
          >
            <v-card-text>
              <v-icon
                color="cyan darken-3"
              >mdi-alert-circle-outline</v-icon>
              {{ this.$store.getters.currChallenge.info }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      userRegex: '',
      userFlags: ''
    }
  },
  filters: {
    highlightFilter (value, userRegex, $style) {
      try {
        const regex = new RegExp(userRegex)
        const newValue = value.replace(regex, (text) => `<span class="${$style.highlight}">${text}</span>`)
        return newValue
      } catch (err) {
        console.log(err)
        return value
      }
    }
  },
  methods: {
    nextChallenge () {
      const currIdx = this.$store.state.currIdx
      const regex = new RegExp(this.userRegex)

      if (regex.test(this.$store.getters.currChallenge.fulltext)) {
        this.$store.commit('navigateToChallenge', currIdx + 1)
      } else {
        console.log('no!')
      }
    }
  }
}
</script>

<style lang="sass" module>
.highlight
  background-color: yellow

</style>
