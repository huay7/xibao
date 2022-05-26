import Vue from 'vue';
import App from './App';
import { router } from './router';
// import VConsole from 'vconsole';
// import 'vant/lib/icon/local.css';
import Vant from 'vant/lib/index';
import 'vant/lib/index.less';
import 'vant/lib/icon/local.css';

// new VConsole()

Vue.use(Vant);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
// Vue.use(Vant);