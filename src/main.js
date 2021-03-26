// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
// import 'element-ui/lib/theme-chalk/index.css'
// import '../static/theme/dark-index.css'
import '../static/theme/primary_index.css'
import 'vuesax/dist/vuesax.css'
import 'default-passive-events'
import ElementUI from 'element-ui'
// import ECharts from 'vue-echarts'
// import 'echarts-gl'
// Vue.component('v-chart', ECharts)

import 'material-icons/iconfont/material-icons.css'
import '../static/css/fontello-embedded.css'
import {fetch, post, postStandard} from './utils/axios'
// 本来想局部引入，结果发现基本上都用到了
// import {
//   Alert,
//   Aside,
//   Backtop,
//   Button,
//   Card,
//   Col,
//   Container,
//   Dialog,
//   Divider,
//   Form,
//   FormItem,
//   Header,
//   Icon,
//   Image,
//   Input,
//   InputNumber,
//   Main,
//   Menu,
//   MenuItem,
//   Message,
//   MessageBox,
//   Notification,
//   Option, PageHeader,
//   Popover,
//   Row,
//   Scrollbar,
//   Select,
//   Submenu,
//   Table,
//   TableColumn,
//   TabPane,
//   Tabs,
//   Tag,
//   Tooltip
// } from 'element-ui'
import dataV from '@jiaminghi/data-view'
import Vuesax from 'vuesax'
Vue.use(Vuesax)
Vue.use(dataV)
Vue.use(ElementUI)
// Vue.use(Button)
// Vue.use(Select)
// Vue.use(Dialog)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Tooltip)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Tabs)
// Vue.use(TabPane)
// Vue.use(Alert)
// Vue.use(Icon)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Card)
// Vue.use(Container)
// Vue.use(Header)
// Vue.use(Aside)
// Vue.use(Main)
// Vue.use(Divider)
// Vue.use(Image)
// Vue.use(Input)
// Vue.use(InputNumber)
// Vue.use(Popover)
// Vue.use(Tag)
// Vue.use(Scrollbar)
// Vue.use(Backtop)
// Vue.use(PageHeader)
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message
Vue.prototype.$post = post
Vue.prototype.$postStandard = postStandard
Vue.prototype.$get = fetch
Vue.config.productionTip = false
Vue.config.performance = true
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   store,
//   router,
//   components: {App},
//   template: '<App/>'
// })

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
