import Vue from 'vue'
import Router from 'vue-router'
import Message from "../components/Message";
import User from "../components/User";
import Detail from "../components/Detail";


Vue.use(Router)

export default new Router({
    routes: [
        // {path: '/', redirect: "/"},
        {path: '/message', component: Message},
        {path: '/user', component: User},
        {path: '/detail/:index', component: Detail},
    ]
})
