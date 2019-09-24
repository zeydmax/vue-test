import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/HelloWorld';
import FansForm from './components/FansForm';
import Forms from './components/Forms'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/edit/:tab?',
        name: 'Edit',
        component: FansForm,
        children: [
            {
                path: 'form',
                name: 'Forms',
                component: Forms
            }
        ]
    }
]



export default new VueRouter({
    routes,
    mode: 'history'
})