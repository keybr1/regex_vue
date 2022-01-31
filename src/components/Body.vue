<template>
  <v-row>
    <v-col sm="10">
      <h3 v-html="$options.filters.highlightFilter(text, userRegex, $style)"></h3>
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
        class="mx-auto"
        max-width="344"
        outlined
      >
      <v-icon>mdi-alert-circle-outline</v-icon>
      <v-card-text>
        Some text
      </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      text: 'Some text more text for everyone',
      userRegex: ''
    }
  },
  filters: {
    highlightFilter (value, userRegex, $style) {
      const regex = new RegExp(userRegex, 'g')
      const newValue = value.replace(regex, (text) => `<span class="${$style.highlight}">${text}</span>`)
      return newValue
    }
  }
}
</script>

<style lang="sass" module>
.highlight
  background-color: yellow

</style>
