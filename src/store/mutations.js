export default {
  'LOADING'(state) {
    state.loading = !state.loading;
  },
  'IMAGE_UPLOADED_SUCCESS'(state, { image }) {
    state.image = image.data;
  },
  'IMAGE_UPLOADED_FAIL'(state) {
    state.image = 'Falha ao fazer o upload';
  },
  'SUCCESS_MESSAGE' (state, {response}) {
    state.message = response.message;
    state.messageClass = 'success';
    setTimeout(() => {
    message = messageClass = '';
  }, 2500);
  },
  'FAIL_MESSAGE' (state, { response }) {
    state.message = response.message;
    state.messageClass = 'danger';
    setTimeout(() => {
    message = messageClass = '';
  }, 2500);
  }
}
