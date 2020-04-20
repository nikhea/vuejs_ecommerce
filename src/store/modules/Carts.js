import axios from 'axios';

// import axios from 'axios'
const state = {
	carts: []
};
const getters = {
	AllCarts: (state) => {
		// console.log(state)
		return state.carts;
	}
};
const actions = {
	async fetchCarts({ commit }) {
		const response = await axios.get(`http://localhost:2000/api/routes/carts`);
		console.log(response.data);
		console.log('fetchCarts');
		commit('setCarts', response.data);
	},

	async addToCart({ commit }, id) {
		const response = await axios.post(`http://localhost:2000/api/routes/carts/${id}`);
		console.log(response.data);
		console.log(id);
		commit('addcart', response);
	},
	async deleteCarts({ commit }, _id) {
		await axios.delete(`http://localhost:2000/api/routes/carts/${_id}`);

		console.log(_id);
		commit('removeCart', _id);
	}
};
const mutations = {
	setCarts: (state, carts) => (state.carts = carts),
	// setCarts: (state, carts) => (console.log(state,carts)),

	addcart: (state, res) => [ res, ...state.carts ],

	removeCart: (state, _id) => (state.carts = state.carts.filter((cart) => cart._id !== _id))
	// removeCart: (state, _id) => (console.log(state.cart, _id))
};

export default {
	state,
	actions,
	mutations,
	getters
};
