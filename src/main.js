import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

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
	render: (h) => h(App)
}).$mount('#app');
