import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.esm.min';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import '../public/css/style.less';
import '../public/css/colors.less';
import '../public/css/size.less';
import '../public/css/buttons.less';
import '../public/css/margin.less';
import '../public/css/padding.less';

import RouterMachine from './mixins/route_machine'
import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://todo-api:5000'
// setting the top left path cf NavBar.vue
router.beforeEach(
    (to, from, next) => {
        store.state.current_route = to
        next()
    }
);

// use global mixin
Vue.mixin(RouterMachine)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


