import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: null,
		userId: null,
	},
	getters: {},
	actions: {
		async login({ commit }, payload) {
			try {
				let response = await axios.post('http://dom.elo/api/auth/', payload);
				commit('auth',{
          token: response.data.idToken,
          userId: response.data.localId
        })
			} catch (error) {
				console.log(error);
			}
		},
	},
	mutations: {
		auth(state, payload) {
			state.token = payload.token;
			state.userId = payload.userId;
		},
	},
	modules: {},
});
