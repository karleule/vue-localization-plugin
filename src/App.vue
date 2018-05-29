<template>
  <v-app>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <div>
          <div>
            {{$root.$i18n.locale}}
          </div>
          <div class="mb-3">
            {{$t('Hello')}}
          </div>
          <locale-select></locale-select>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  i18n: {
    messages: {
    "en": {
      "Hello": "Hello"
    },
    "de": {
      "Hello": "Hallo"
    }
    }
  }
}
</script>
