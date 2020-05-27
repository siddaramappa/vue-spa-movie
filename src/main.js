import Vue from 'vue'
import App from './App.vue'
// import axiosApi from "axios";

import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// make available axios for all component

// const axios = axiosApi.create({
//     baseURL: ``
// });

// window.axios = axios;




new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')