
import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import axios from 'axios'
import VueAxios from 'vue-axios'

import AOS from "aos";
import "aos/dist/aos.css";

// import * as VueAos from 'vue-aos'

// import { faPhone } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
library.add(fas)

// let aos = new AOS({
//     created() {
//         AOS.init();
//     }
// }) 


createApp(App).use(store).use(router).use(VueAxios, axios).component('fa', FontAwesomeIcon).mount('#app')

// createApp.AOS = new AOS.init({ disable: "phone" })

