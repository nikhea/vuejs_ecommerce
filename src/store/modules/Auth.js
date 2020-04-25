import axios from 'axios';
// import tokenConfig from './helper/token';
// import { actions as Errors } from './Error';
// const USER_URL = 'http://localhost:2000/api/routes/users/signup';

const state = {
	// auth: {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null
	// id: ''
	// }
};
const getters = {
	authState: (state) => {
		// console.log(state)
		// return state.auth;
		return state;
	}
};
const actions = {
	// getState
	async LoadUser({ commit }, id) {
		//    user Loading
		commit('user_loading');
		// Get Token from LocalStorage
		let token = state.token;
		// Headers
		const config = {
			headers: {
				'Content-type': 'application/json'
				// token: [ 'x-auth-token' ]
			}
		};

		if (token) {
			config.headers['x-auth-token'] = token;
		}

		try {
			const respones = await axios.get(`http://localhost:2000/api/routes/users/user/${id}`, config);
			console.log(respones.data);
			commit('user_loaded', respones.data);
		} catch (error) {
			console.log(error);
			// commit(Errors(error.data, error.status));
			commit('register_LogIn_error');
		}
	},
	async registerSuccess({ commit }, { name, email, password, nickname }) {
		//Request Body
		let body = { name, email, password, nickname };

		//Headers
		// const config = {
		// 	header: {
		// 		'Content-type': 'application/json',
		// 		token: [ 'x-auth-token' ]
		// 	}
		// };
		const config = ['x-auth-token']

		try {
			const res = await axios.post('http://localhost:2000/api/routes/users/signup', body, config);
			console.log(res);
			commit('register_LogIn_Success', res.data);
		} catch (error) {
			// commit(Errors.returnError(error.respones.data, error.respones.status));
			console.log(error);
			commit('register_LogIn_error');
		}
	},
	async LogInSuccess({ commit }, { email, password }) {
		//Request Body
		let body = { email, password };

		//Headers
		// const config = {
		// 	header: {
		// 		'Content-type': 'application/json',
		// 		token: [ 'x-auth-token' ]
		// 	}
		// };
		const config = [ 'x-auth-token' ];

		try {
			const res = await axios.post('http://localhost:2000/api/routes/users/login', body, config);
			console.log(res.data);
			commit('register_LogIn_Success', res.data);
		} catch (error) {
			// commit(Errors.returnError(error.data, error.status));
			console.log(error);
			commit('register_LogIn_error');
		}
	},
	userLogOut({ commit }) {
		commit('set_LogOut_Success');
	}
};
const mutations = {
	user_loading: (state) => {
		state.isLoading = true;
	},
	user_loaded: (state, payload) => {
		(state.isAuthenticated = true),
			(state.isLoading = false),
			(state.token = payload.token),
			(state.user = payload.user);
	},

	register_LogIn_Success: (state, payload) => {
		console.log(state, payload);
		localStorage.setItem('token', payload.token);
		(state.isAuthenticated = true),
			(state.isLoading = false),
			(state.token = payload.token),
			(state.user = payload.user);

	},
	set_LogOut_Success: (state) => {
		localStorage.removeItem('token');
		(state.token = null), (state.user = null), (state.isAuthenticated = false), (state.isLoading = false);
		state.id = null;
		console.log(state);
	},
	register_LogIn_error: (state) => {
		localStorage.removeItem('token');
		(state.token = null), (state.user = null), (state.isAuthenticated = false), (state.isLoading = false);
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
