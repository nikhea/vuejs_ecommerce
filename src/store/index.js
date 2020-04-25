import Vue from 'vue';
import Vuex from 'vuex';
import Products from './modules/Products';
import Auth from './modules/Auth';
import Carts from './modules/Carts';
import Error from './modules/Error'
import ShoppingList from './modules/ShoppingList'
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		Products,
		Carts,
		Error,
		ShoppingList,
		Auth
	}
});
