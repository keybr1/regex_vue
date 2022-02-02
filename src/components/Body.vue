<template>
  <v-row>
    <v-col sm="10">
      <h2
        v-html="$options.filters.highlightFilter(
          currChallenge.fullText, userRegex, $style)"
        class="mt-5 mb-4"
      ></h2>
      <v-text-field
        v-model="userRegex"
        placeholder="Enter Regex"
        outlined
      >
        <template v-slot:prepend>
        /
        </template>
        <template v-slot:append-outer>
        /
        </template>
      </v-text-field>
      <v-card
        outlined
      >
      <v-card-text>
        <v-icon
          color="cyan darken-3"
        >mdi-alert-circle-outline</v-icon>
        {{ currChallenge.info }}
      </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      userRegex: ''
    }
  },
  filters: {
    highlightFilter (value, userRegex, $style) {
      const regex = new RegExp(userRegex, 'g')
      const newValue = value.replace(regex, (text) => `<span class="${$style.highlight}">${text}</span>`)
      return newValue
    }
  },
  computed: {
    ...mapGetters(['currChallenge'])
  }
}
</script>

<style lang="sass" module>
.highlight
  background-color: yellow

</style>
