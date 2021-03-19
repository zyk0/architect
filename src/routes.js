import Vue from 'vue';
import Router from 'vue-router';

// страницы
import Home from '@/pages/Home';
import Designers from '@/pages/Designers';
import Lamina from '@/pages/Lamina';
import Pexel from '@/pages/Pexel';
import Registration from '@/pages/Registration';
import Login from '@/pages/Login';
import Test from '@/pages/Test'; /* тестовая страничка */
import Specimen  from '@/pages/Specimen' /* динамические роуты */
import NotFound from '@/pages/404';

Vue.use(Router);

// роутинг
export default new Router({
   mode: 'history', // # 
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/designers',
      name: 'designers',
      component: Designers,
    },
    {
      path: '/lamina',
      name: 'lamina',
      component: Lamina,
    },
	{
      path: '/pexel',
      name: 'pexel',
      component: Pexel
    },
	{
      path: '/registration',
      name: 'registration',
      component: Registration,
    },	
	{
      path: '/login',
      name: 'login',
      component: Login,
    },
	{
      path: '/test',
      name: 'test',
      component: Test, 
    },
	{
      path: '/:id',
      name: 'specimen',
      component: Specimen
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});
