import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import About from './components/about';

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component: App
    },
    {
      path:'/about',
      name:'about',
      component: About
    },
  ]
})