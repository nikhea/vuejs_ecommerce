const state = {
	// error: {
	msg: {},
	status: null,
	id: null
	// }
};
const getters = {
	ErrorState: (state) => {
        // return state.error;
        return state
	}
};
export const actions = {
    returnError({ commit }, msg, status, id = null) {
       const  payload = { msg, status, id }
		commit('Get_Error', payload);
        return {
            // commit('Get_Error', payload),
			payload: { msg, status, id }
		};
	},

    // clear error
    ClearError({ commit }) {
		commit('Clear_Error');
		return {
			// payload: { msg, status, id }
		};
	}
};
const mutations = {
	Get_Error: (state, payload) => {
		return {
			...state,
			msg: payload.msg,
			status: payload.status,
			id: payload.id
		};
	},
	Clear_Error: () => {
		return {
			msg: {},
			status: null,
			id: null
		};
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
