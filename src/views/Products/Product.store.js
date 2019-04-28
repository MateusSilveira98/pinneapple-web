import service from '@/store/services';
import Utils from '@/utils/index';
const state = {
  all: [],
  selected: {}
}
const mutations = {
  'GET_ALL_SUCCESS' (state, { payload }) {
    state.all = payload;
  },
  'GET_BY_ID_SUCCESS' (state, { payload }) {
    state.selected = payload;
  }
}
const actions = {
  async createProduct({ commit }, payload) {
    commit('LOADING');
    let response = await service.post(payload, 'product/create');
    Utils.callback(commit, response.data);
  },
  async editProduct({ commit }, payload) {
    commit('LOADING');
    let response = await service.edit(payload, 'product/edit');
    Utils.callback(commit, response.data);
  },
  async getAllProducts({ commit }) {
    let response = await service.getAll('products');
    let payload = response.data;
    commit('GET_ALL_SUCCESS', { payload })
  },
  async getProductById({ commit }, id) {
    let response = await service.getById(id, `product`);
    let payload = response.data;
    if (payload._id) {
      commit('GET_BY_ID_SUCCESS', { payload })
    } else {
      commit('PUSH_NOTIFICATION');
      commit('FAIL_MESSAGE', { response })
    }
  }
}

export default {state, mutations, actions}