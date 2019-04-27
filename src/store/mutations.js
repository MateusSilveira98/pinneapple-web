export default {
  'LOADING'(state) {
    state.loading = !state.loading
  },
  'IMAGE_UPLOADED_SUCCESS'(state, { image }) {
    state.image = image
  },
  'IMAGE_UPLOADED_FAIL'(state) {
    state.image = 'Falha ao fazer o upload'
  },
  'SET_HEADER'(state) {
    state.showHeader = !state.showHeader
  },
  'SUCCESS_MESSAGE' (state, {response}) {
    state.message = response.message
    state.messageClass = 'success'
  },
  'FAIL_MESSAGE' (state, { response }) {
    state.message = response.message
    state.messageClass = 'danger'
  }
}
