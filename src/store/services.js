import axios from 'axios'
import config from '@/config.json'
export default {
  uploadImageToStorage(file) {
    const storage = config.IMG_STORAGE;
    let formData = new FormData();
    formData.append('image', file);
    formData.append('folder', storage.folder);
    delete axios.defaults.headers.common["Authorization"];
    return axios({
      url: storage.url,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
  },
  post(payload, url) {
    return axios.post(url, payload)
  },
  edit(payload, url) {
    return axios.put(url, payload)
  },
  getAll (url) {
    return axios.get(url)
  },
  getById (id, url) {
    return axios.get(`${url}/${id}`)
  }
}
