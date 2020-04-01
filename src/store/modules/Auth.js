import axios from 'axios';
import tokenConfig from './helper/token';
const USER_URL = 'http://localhost:2000/api/routes/users/signup';

const state = {
	auth: {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		isLoading: false,
		user: null
	}
};
const getters = {
	authState: (state) => {
		return state.auth;
	}
};
const actions = {
	registerSuccess({ commit }, { name, email, password, nickname }) {
		//Request Body
		let body = JSON.stringify({ name, email, password, nickname });

		Headers;
		const config = {
			header: {
				'Content-type': 'application/json'
			}
		};

		axios.post(USER_URL, body, config);
		console.log(tokenConfig).then((res) => commit('register_LogIn_Success', console.log(res))).catch((err) => {
			console.log(err);
		});
	},
	LogInSuccess({ commit }) {
		commit('register_LogIn_Success', 4567);
	},
	userLogOut({ commit }) {
		commit('set_LogOut_Success');
		console.log(1234);
	}
};
const mutations = {
	user_loading: (state) => {
		return {
			...state,
			isLoading: true
		};
	},
	user_loaded: (state, res) => {
		return {
			...state,
			isLoading: false,
			isAuthenticated: true,
			user: res
		};
	},

	register_LogIn_Success: (state, payload) => {
		console.log(state, payload);
		localStorage.setItem('token', payload);
		return {
			...state,
			...payload,
			isAuthenticated: true,
			isLoading: false
		};
	},
	set_LogOut_Success: (state) => {
		localStorage.removeItem('token');
		return {
			...state,
			token: null,
			user: null,
			isAuthenticated: false,
			isLoading: false
		};
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
