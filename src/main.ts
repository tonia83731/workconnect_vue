import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

// vee-validator
// https://miahsuwork.medium.com/vue-vee-validate-%E5%AF%A6%E7%8F%BE%E5%A4%9A%E8%AA%9E%E7%B3%BB%E8%A1%A8%E5%96%AE%E9%A9%97%E8%AD%89-c6aa2e075d73

import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

// import { VueSelect } from "vue-select";
// import "vue-select/dist/vue-select.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.component('VueDatePicker', VueDatePicker)
// app.component('VueSelect', VueSelect);

app.mount('#app')
