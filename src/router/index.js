import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/3d-rotate'
    },
    {
      path: '/2d-round',
      name: '2d-round',
      component: () => import('../views/2D-round/Index.vue')
    },
    {
      path: '/3d-rotate',
      name: '3D-rotate',
      component: () => import('../views/3D-rotateDemo/index.vue')
    },
    {
      path: '/3d-wordCloud',
      name: '3D-wordCloud',
      component: () => import('../views/3D-wordCloud/index.vue')
    },
    {
      path: '/grayscale',
      name: 'grayscale',
      component: () => import('../views/grayscale/index.vue')
    },
    {
      path: '/watermark',
      name: 'watermark',
      component: () => import('../views/WaterMark/index.vue')
    }
  ]
});
