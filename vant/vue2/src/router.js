import Vue from 'vue';
import Router from 'vue-router';

// 获取原型对象上的push函数
const originalPush = Router.prototype.push
// 修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
    name: 'main',
    component: () => import('./view/main'),
    meta: {
      title: 'main'
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
