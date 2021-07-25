import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import store from "./store";

Vue.config.productionTip = false;
Vue.use(ElementUI)

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
