import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyA5PQYOzD7NfgZmi7lov7olQFR6lsvS8jg",
  authDomain: "vue-crm-acc.firebaseapp.com",
  databaseURL: "https://vue-crm-acc.firebaseio.com",
  projectId: "vue-crm-acc",
  storageBucket: "vue-crm-acc.appspot.com",
  messagingSenderId: "147713150742",
  appId: "1:147713150742:web:5234bc1411a73574298a37",
  measurementId: "G-VQSY23KP4X"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// firebase.analytics();
