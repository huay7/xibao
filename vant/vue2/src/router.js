import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/celebratePoster'
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
