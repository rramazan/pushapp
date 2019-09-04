import Vue from 'vue'
import Router from 'vue-router'
import Application from "./views/Application";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/:id',
            component: Application
        }
    ]
})
