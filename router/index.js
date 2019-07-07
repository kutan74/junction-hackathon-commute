import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Carpool from '@/components/Carpool'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            components: Dashboard
        },

        {
            path: '/carpool',
            name: 'Carpool',
            components: Carpool
        },
    ],

    mode: 'history'
})