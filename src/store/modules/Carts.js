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

		commit('setCarts', response.data);
	},

	async addToCart({ commit }, id) {
		const response = await axios.post(`http://localhost:2000/api/routes/carts/${id}`);
		commit('addcart', response);
	},
	async deleteCarts({ commit }, _id) {
		await axios.delete(`http://localhost:2000/api/routes/carts/${_id}`);

		commit('removeCart', _id);
	}
};
const mutations = {
	setCarts: (state, carts) => (state.carts = carts),

	addcart: (state, res) => [ res, ...state.carts ],

	removeCart: (state, _id) => (state.carts = state.carts.filter((cart) => cart._id !== _id))
};

export default {
	state,
	actions,
	mutations,
	getters
};
