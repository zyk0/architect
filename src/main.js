import Vue from "vue";
import App from "./App.vue";
import router from "./routes.js";
import store from "./store/index.js";
import Vuelidate from "vuelidate";

import * as Sentry from "@sentry/vue";
//import { Integrations } from "@sentry/tracing";

// style
import "./style/scss/reset.scss";
import "./style/scss/main.scss";
import "./style/scss/home.scss";
import "./style/scss/glitch.scss";
import "./style/scss/lattice.scss";
import "./style/scss/lamina.scss";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
//Vue.use(VueAxios, axios)

/*
Sentry.init({
  Vue: Vue,
  dsn: "https://dfab4d69c34740f1b6c28dbbdd54295d@o551208.ingest.sentry.io/5674428",
  //integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  //tracesSampleRate: 1.0,
});
*/
new Vue({
    router: router,
    store: store,
    render: (h) => h(App),
}).$mount("#app");
