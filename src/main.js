// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { Button } from "mint-ui";
import VueLazyload from "vue-lazyload";
import App from "./App";
import router from "./router";
import store from "./store";

import "./mock/mockServer"; // 加载mockServer即可
import loading from "./common/imgs/loading.gif";
import "./filters";

Vue.config.productionTip = false;
// 注册全局组件标签
Vue.component(Button.name, Button);
Vue.use(VueLazyload, {
  // 内部自定义一个指令lazy
  loading
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
