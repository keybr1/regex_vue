<template>
  <v-row>
    <v-col sm="10">
      <v-row>
        <v-col cols="12">
          <h2
            v-html="$options.filters.highlightFilter(
              $store.getters.currChallenge.fullText,
              userRegex,
              userFlags,
              $style
            )"
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
            :disabled="!this.$store.getters.currChallenge.flags"
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
    <v-snackbar
      v-model="snackbar"
      :color="snackColor"
      absolute
      right
      elevation="24"
      top
    >
    {{ snackMessage }}
    </v-snackbar>
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
      flagsError: false,
      snackbar: false,
      snackColor: 'error',
      snackMessage: 'Incorrect answer. Try again.'
    }
  },
  filters: {
    highlightFilter (value, userRegex, userFlags, $style) {
      try {
        const regex = new RegExp(userRegex, userFlags)
        const newValue = value.replace(regex, (text) =>
        `<span class="${$style.highlight}">${text}</span>`)
        return newValue
      } catch {
        return value
      }
    }
  },
  methods: {
    checkValidRegex () {
      try {
        // eslint-disable-next-line no-new
        new RegExp(this.userRegex, this.userFlags)
        this.regexError = false
        this.errMsg = ''
      } catch {
        this.regexError = true
        this.errMsg = 'Invalid Regex'
      }
    },
    nextChallenge () {
      const currIdx = this.$store.state.currIdx
      const regex = new RegExp(this.userRegex, this.userFlags)

      const { toMatch, flags } = this.$store.getters.currentChallenge
      let unmatched = []
      let valid = false

      if (!flags || (this.userFlags && this.userFlags.includes(flags))) {
        valid = true
        unmatched = toMatch.filter((str) => {
          const matched = str.match(regex)
          return !matched || matched[0] !== str
        })
      }
      if (valid && !unmatched.length) {
        this.userRegex = ''
        this.userFlags = ''
        this.snackColor = 'success'
        this.snackMessage = 'Great job! Challenge completed.'
        this.snackbar = true
        this.$store.dispatch('navigateToChallenge', currIdx + 1)
      } else {
        this.snackColor = 'error'
        this.snackMessage = 'Incorrect answer. Try again.'
        this.snackbar = true
      }
    }
  }
}
</script>

<style lang="sass" module>
.highlight
  background-color: yellow

</style>
