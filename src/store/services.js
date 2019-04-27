import axios from 'axios'
import config from '@/config.json'
export default {
  uploadImageToCloudinary(file) {
    const cloudinary = config.CLOUDINARY;
    let formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', cloudinary.preset)
    formData.append('folder', cloudinary.folder)
    return axios({
      url: cloudinary.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
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
