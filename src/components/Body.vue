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
            @keyup="checkValidRegex"
            outlined
            :error="regexError"
            :error-messages="errMsg"
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
            :disabled="!this.$store.getters.currChallenge.needFlags"
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
      userFlags: '',
      errMsg: '',
      regexError: false,
      flagsError: false
    }
  },
  filters: {
    highlightFilter (value, userRegex, $style) {
      try {
        const regex = new RegExp(userRegex)
        const newValue = value.replace(regex, (text) => `<span class="${$style.highlight}">${text}</span>`)
        return newValue
      } catch {
        return value
      }
    }
  },
  methods: {
    checkValidRegex () {
      try {
        RegExp(this.userRegex)
        this.regexError = false
        this.errMsg = ''
      } catch {
        this.regexError = true
        this.errMsg = 'Invalid Regex'
      }
    },
    nextChallenge () {
      const currIdx = this.$store.state.currIdx
      const regex = new RegExp(this.userRegex)

      if (regex.test(this.$store.getters.currChallenge.fulltext)) {
        this.$store.dispatch('navigateToChallenge', currIdx + 1)
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
