import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    // path: '*',
    // redirect: '/goods'
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情'
    }
  },
  {
    name: 'celebratePoster',
    component: () => import('./view/celebratePoster'),
    meta: {
      title: '永赢喜报制作'
    }
  },
  {
    name: 'edit',
    component: () => import('./view/celebratePoster/edit'),
    meta: {
      title: '喜报编辑'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
