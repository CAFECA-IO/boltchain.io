import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 自訂語言檔
import en from './en/lang'
import tw from './tw/lang'

// 使用插件
Vue.use(VueI18n)

const locale = localStorage.getItem('locale') || 'tw'

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale, // set locale
  messages: {en, tw}
})

export default i18n