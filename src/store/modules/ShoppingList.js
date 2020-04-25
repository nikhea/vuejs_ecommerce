import axios from 'axios';

// import axios from 'axios'
const state = {
	ShoppingLists: []
};
const getters = {
	AllShoppingLists: (state) => {
		return state.ShoppingLists;
	}
};
const actions = {
	async fetchShoppingLists({ commit }) {
		const response = await axios.get(`http://localhost:2000/api/routes/ShoppingList`);
		console.log(response.data);
		commit('setShoppinglists', response.data);
	},
	async fetchShoppingList({ commit }, id) {
		const response = await axios.get(`http://localhost:2000/api/routes/ShoppingList/${id}`);
		commit('setShoppinglist', response.data);
	},
	async addShoppingList({ commit },name) {
		const response = await axios.post(`http://localhost:2000/api/routes/ShoppingList`, {name, isCompleted:false});
		commit('addShoppinglist', response.data);
		console.log(response.data)
	},
	async deletedShoppingList({ commit }, _id) {
		await axios.delete(`http://localhost:2000/api/routes/ShoppingList/${_id}`);
		commit('deleteShoppinglist', _id);
	}
};
const mutations = {
	setShoppinglists: (state, payLoad) => (state.ShoppingLists = payLoad),
	setShoppinglist: (payLoad) => payLoad,
	deleteShoppinglist: (state, _id) => (state.ShoppingLists = state.ShoppingLists.filter((ShoppingList) => ShoppingList._id !== _id)),
	addShoppinglist:(state,payLoad) =>  [ payLoad, ...state.ShoppingLists ]
};

export default {
	state,
	actions,
	mutations,
	getters
};
