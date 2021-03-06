import Vue from 'vue';
import Vuex from 'vuex';
import Products from './modules/Products';
import Auth from './modules/Auth';
import Carts from './modules/Carts';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		Products,
		Carts,
		Auth
	}
});
