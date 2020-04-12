import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home';
import About from './components/about';
import NeedAdd from './components/NeedAdd';

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/requesthelp',
      name:'requesthelp',
      component: NeedAdd
    },
    {
      path:'/about',
      name:'about',
      component: About
    },
  ]
})