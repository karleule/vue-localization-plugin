import Flags from '@/components/flags'
import LocaleSelect from '@/components/localeSelect'
import VueI18n from 'vue-i18n' 
import isNil from 'lodash/isNil'

const plugin = {
  install (Vue) {
    Vue.use(VueI18n)
    Vue.prototype._i18n = new VueI18n({
      locale: isNil(window.localStorage.getItem("defaultLocale")) ? "en" : window.localStorage.getItem("defaultLocale"),
      messages: {
      }
    })

    Vue.component(Flags.name, Flags)
    Vue.component(LocaleSelect.name, LocaleSelect)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin

// Export all components too
export {
  Flags,
  LocaleSelect
}
