import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import i18n from '@/i18n'
// filter
import installFilter from '@/filter'
import installDirective from '@/directives'

import '@/styles/index.scss'
import installIcons from '@/icons'
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
installDirective(app)

app.use(store).use(router).use(i18n).mount('#app')
