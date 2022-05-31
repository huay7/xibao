import Vue from 'vue';
import App from './App';
import { router } from './router';
import Vant from 'vant/lib/index';
import clipboard from 'clipboard';
import 'vant/lib/index.less';

import { wxShare, setTitle ,getPDFDownLoadUrl,base64Decode,base64Encode } from './utils/util'

//注册到vue原型上
Vue.prototype.clipboard = clipboard;
Vue.prototype.wxShare = wxShare;
Vue.prototype.setTitle = setTitle;
Vue.prototype.getPDFDownLoadUrl = getPDFDownLoadUrl;
Vue.prototype.base64Decode = base64Decode;
Vue.prototype.base64Encode = base64Encode;
// new VConsole()

Vue.use(Vant);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
