import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  // {
  //   path: '*',
  //   redirect: '/autoIvestList'
  // },
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
    name: 'pdfList',
    component: () => import('./view/pdfList'),
    meta: {
      title: '永赢产品报告合集'
    }
  },
  {
    name: 'autoIvestList',
    component: () => import('./view/autoIvestList'),
    meta: {
      title: '永赢定投资料包'
    }
  },
  {
    name: 'autoIvestPdfList',
    component: () => import('./view/autoIvestList/list'),
    meta: {
      title: '定投垫板合集'
    }
  },
  {
    name: 'autoIvestPosterList',
    component: () => import('./view/autoIvestList/posterlist'),
    meta: {
      title: '定投海报合集'
    }
  },
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
