import Vue from 'vue'
import app from './js/App.vue'

import './css/normalize.css'

new Vue({
    render: h => h (app)
}).$mount ('#app')