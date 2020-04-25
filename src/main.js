import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import vuetify from '@/plugins/vuetify' // path to vuetify export

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faJs, faVuejs,  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import {
	faCoffee, faDesktop,
	faShoppingCart, faBaseballBall, faEdit,faTrash
} from '@fortawesome/free-solid-svg-icons'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
library.add(faSpinner,faCoffee,faTrash, faDesktop, faJs,faVuejs, faShoppingCart, faBaseballBall, faEdit);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
// Vue.directive("red", {
// 	bind(el) {
// 		el.style.backgroundColor = '#d88f08'
// 	}
// })

Vue.directive('red', {
	bind(el, binding) {
		if (binding.value === 'red') {
			el.style.backgroundColor = 'red';
		} else if (binding.value === 'darkOrange') {
			el.style.backgroundColor = '#d88f08';
		} else if (binding.value === 'green') {
			el.style.backgroundColor = 'green';
		}
	}
});
new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App)
}).$mount('#app');
