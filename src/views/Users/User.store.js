import service from '@/store/services';
import Utils from '@/utils/index';

const state = {
}
const mutations = {
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
  },
  async login({ commit }, payload) {
    commit('LOADING');
    let response = await service.post(payload, 'user/login');
    response = response.data;
    if (response._id) {
      commit('LOADING');
      commit('SUCCESS_MESSAGE', {response: {message: 'Autorizado! :)'}});
      Utils.localstorage.set('user', response);
    } else {
      commit('LOADING');
      commit('FAIL_MESSAGE', { response });
    }

  },
  async getUserById({ commit }, id) {

  }
}

export default { state, mutations, actions }