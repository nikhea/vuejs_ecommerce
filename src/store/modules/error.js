import axios from 'axios';

const USER_URL = 'http://localhost:2000/api/routes/users/signup';

const state = {
	error: {
        msg: {},
        status:null,
        id:null
	}
};
const getters = {
	authState: (state) => {
		return state.auth;
	}
};
const actions = {
	
};
const mutations = {

};

export default {
	state,
	actions,
	mutations,
	getters
};
