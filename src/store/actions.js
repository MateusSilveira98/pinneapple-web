import services from './services'
import axios from 'axios';
import Utils from '@/utils/index';
export default {
  async uploadImageToStorage({ commit }, file) {
    commit('LOADING');
    try {
      let response = await services.uploadImageToStorage(file);
      if (response.data) {
        let image = response.data;
        commit('LOADING');
        commit('IMAGE_UPLOADED_SUCCESS', { image });
        axios.defaults.headers.common['Authorization'] = `Bearer ${Utils.localstorage.get('token')}`;
      }
    } catch (error) {
      commit('LOADING');
      console.log(error);
    }
  }
}
