import service from '@/store/services';
import Utils from '@/utils/index';

const state = {
  loggedUser: {}
}
const mutations = {
  'GET_USER'(state, { loggedUser }) {
    state.loggedUser = loggedUser;
  }
}
const actions = {
  async createUser({ commit }, payload) {
    commit('LOADING');
    let response = await service.post(payload, 'user/create');
    Utils.callback(commit, response.data);
  },
  async editUser({ commit }, payload) {
    commit('LOADING');
    let response = await service.edit(payload, 'user/edit');
    Utils.callback(commit, response.data);
    const user = {
      _id: response.data.payload._id,
      name: response.data.payload.name, 
      email: response.data.payload.email, 
      createdAt: response.data.payload.createdAt
    };
    Utils.localstorage.set('user', user);
  },
  async login({ commit }, payload) {
    commit('LOADING');
    let response = await service.post(payload, 'user/login');
    response = response.data;
    if (response._id) {
      commit('LOADING');
      Utils.localstorage.set('token', response.token);
      delete response.token;
      Utils.localstorage.set('user', response);
      commit('SUCCESS');
    } else {
      commit('LOADING');
      commit('PUSH_NOTIFICATION');
      commit('FAIL_MESSAGE', { response });
    }

  },
  async getLoggedUser({ commit }) {
    const loggedUser = Utils.localstorage.get('user');
    commit('GET_USER', { loggedUser });
  }
}

export default { state, mutations, actions }