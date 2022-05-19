import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/test2'
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
  },
  {
    name: 'test',
    component: () => import('./view/new2'),
    meta: {
      title: '测试'
    }
  },
  {
    name: 'test2',
    component: () => import('./view/new3/posterlist'),
    meta: {
      title: '测试'
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
