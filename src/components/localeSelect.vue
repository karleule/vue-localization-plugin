<template>
  <v-select class="pa-0"
            v-bind:items="languageItems"
            v-model="selectedLanguage"
            single-line
            auto
            hide-details>
    <template slot="selection" slot-scope="data">
      <flag-icon :iso="data.item.iso" :size="'2'"></flag-icon>
        <span class="ml-3">
          {{data.item.name}}
        </span>
    </template>
    <template slot="item" slot-scope="data">
        <flag-icon :iso="data.item.iso" :size="'2'"></flag-icon>
          <span class="ml-3">
            {{data.item.name}}
          </span>
    </template>
  </v-select>
</template>

<script>
import filter from 'lodash/filter'
import isNil from 'lodash/isNil'
import map from 'lodash/map'

let defaultLocales = {
  'en': {
    name: 'English',
    iso: 'en'
  },
  'de': {
    name: 'Deutsch',
    iso: 'de'
  }
}

export default {
  name: 'localeSelect',
  props: ['languages', 'value', 'storeLocal', 'syncGlobal'],
  data () {
    let selectedLanguage = this.getDefaultLanguage()
    return {
      selectedLanguage
    }
  },
  computed: {
    languageItems () {
      if (isNil(this.languages)) {
        return map(defaultLocales)
      } else {
        let filteredList = filter(this.languages, (item) => {
          return !isNil(defaultLocales[item])
        })
        return map(filteredList, (item) => {
          return defaultLocales[item]
        })
      }
    },
    doStoreLocal () {
      return isNil(this.storeLocal) ? true : this.storeLocal
    },
    doSyncGlobal () {
      return isNil(this.storeLocal) ? true : this.syncGlobal
    }
  },
  methods: {
    getDefaultLanguage () {
      let res = window.localStorage.getItem('defaultLocale')
      res = defaultLocales[res]
      if(!isNil(res)) {
        console.log(res)
        return res
      }
      return isNil(this.value) ? defaultLocales['en'] : defaultLocales[this.value]       
    }
  },
  watch: {
    selectedLanguage (value) {
      if (this.doStoreLocal) {
        window.localStorage.setItem("defaultLocale", value.iso)
      } 
      if (!isNil(this.$root.$i18n) && this.doSyncGlobal) {
        this.$root.$i18n.locale = value.iso
      }
      this.$emit('input', value.iso)
    }
  }
}
</script>
