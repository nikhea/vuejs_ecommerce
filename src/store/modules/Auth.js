import axios from 'axios';
// import tokenConfig from './helper/token';
import { actions as Errors } from './Error';
// const USER_URL = 'http://localhost:2000/api/routes/users/signup';

const state = {
	// auth: {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null
	// }
};
const getters = {
	authState: (state) => {
		// console.log(state)
		// return state.auth;
		return state
	}
};
const actions = {
	// getState
	async LoadUser({ commit }) {
		//    user Loading
		commit('user_loading');
		// Get Token from LocalStorage
		// let token = getState().authState.token;
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
			const respones = await axios.get('http://localhost:2000/api/routes/users/user', config);
                 console.log(respones)
			commit('user_loaded', respones.data);
		} catch (error) {
			commit(Errors(error.data, error.status));
			// console.log(error);
			commit('register_LogIn_error');
		}
	},
	async registerSuccess({ commit }, { name, email, password, nickname }) {
		//Request Body
		let body = ({ name, email, password, nickname } );

		//Headers
		const config = {
			header: {
				'Content-type': 'application/json',
				token: [ 'x-auth-token' ]
			}
		};
		// const config = ['x-auth-token']

	try {
		const res = axios.post('http://localhost:2000/api/routes/users/signup', body, config);
		console.log(res)
		// commit('register_LogIn_Success', res.data);
		commit('register_LogIn_Success');
	} catch (error) {
		// commit(Errors.returnError(error.respones.data, error.respones.status));
		console.log(error);
			commit('register_LogIn_error');
	}
	},
	LogInSuccess({ commit }, {  email, password }) {
	
	//Request Body
		let body = ({ email, password} );

		//Headers
		// const config = {
		// 	header: {
		// 		'Content-type': 'application/json',
		// 		token: [ 'x-auth-token' ] 
		// 	}
		// };
		const config = ['x-auth-token']

	try {
		const res = axios.post('http://localhost:2000/api/routes/users/login', body, config);
		console.log(res)
		commit('register_LogIn_Success', res);
		
		
	} catch (error) {
		// commit(Errors.returnError(error.data, error.status));
		console.log(error);
			commit('register_LogIn_error');
	}



		// commit('register_LogIn_Success', 4567);
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
	user_loaded: (state, payload) => {
		return {
			...state,
			isAuthenticated: true,
			user: payload,
			isLoading: false
		};
	},

	register_LogIn_Success: (state, payload) => {
		console.log(state, payload);
		localStorage.setItem('token', payload.token);
		// return {
		// 	...state,
		// 	...payload,
		// 	isAuthenticated: true,
		// 	isLoading: false
		// };
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
	},
	register_LogIn_error: (state) => {
		// console.log(state, payload);
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
