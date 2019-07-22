import './bootstrap'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from '@/js/stores.js'
import { router } from '@/js/routes.js'
import Donut from 'vue-css-donut-chart'
import BootstrapVue from 'bootstrap-vue'
import 'vue-css-donut-chart/dist/vcdonut.css'

// TOOD: globalize base_url!
const app = new Vue({
    el: '#app',
    created(){
        if (this.$store.getters.isAuthenticated) {
            this.$store.dispatch('user/userRequest');
        }
    },
    store,
    router
});

export default app;