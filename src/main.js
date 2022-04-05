import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

// import axios from 'axios';
// Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
