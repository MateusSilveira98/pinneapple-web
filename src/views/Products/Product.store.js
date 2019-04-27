import service from '@/store/services';

const state = {
  all: [],
  selected: {}
}
const mutations = {
  'GET_ALL_SUCCESS' (state, { payload }) {
    state.all = payload
  },
  'GET_BY_ID_SUCCESS' (state, { payload }) {
    state.selected = payload
  }
}
const action = {
  async createProduct({ commit }, payload) {
    commit('LOADING')
    let response = await service.post(payload, 'product/create')
    if (response.data.id) {
      commit('LOADING')
      commit('SUCCESS_MESSAGE')
    } else {
      commit('LOADING')
      commit('FAIL_MESSAGE', { response })
    }
  },
  async editProduct({ commit }, payload) {
    commit('LOADING')
    let response = await service.edit(payload, 'product/edit')
    if (response.data.id) {
      commit('LOADING')
      commit('SUCCESS_MESSAGE')
    } else {
      commit('LOADING')
      commit('FAIL_MESSAGE', { response })
    }
  },
  async getAllProducts({ commit }) {
    let response = await service.getAll('products')
    let payload = response.data
    commit('GET_ALL_SUCCESS', { payload })
  },
  async getProductById({ commit }, id) {
    let response = await service.getById(`product/${id}`)
    let payload = response.data
    if (payload.id) {
      commit('GET_BY_ID_SUCCESS', { payload })
    } else {
      commit('FAIL_MESSAGE', { response })
    }
  }
}

export default {state, mutations, action}