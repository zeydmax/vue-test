import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/HelloWorld';
import FansForm from './components/FansForm';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/edit',
        name: 'Edit',
        component: FansForm
    }
]



export default new VueRouter({
    routes,
    mode: 'history'
})