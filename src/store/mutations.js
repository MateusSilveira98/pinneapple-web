const resetMessages = (message, messageClass) => {
  setTimeout(() => {
    message = messageClass = '';
  }, 3000);
}
export default {
  'LOADING'(state) {
    state.loading = !state.loading;
  },
  'IMAGE_UPLOADED_SUCCESS'(state, { image }) {
    state.image = image;
  },
  'IMAGE_UPLOADED_FAIL'(state) {
    state.image = 'Falha ao fazer o upload';
  },
  'SET_HEADER'(state) {
    state.showHeader = !state.showHeader;
  },
  'SUCCESS_MESSAGE' (state, {response}) {
    state.message = response.message;
    state.messageClass = 'success';
    resetMessages(state.message, state.messageClass);
  },
  'FAIL_MESSAGE' (state, { response }) {
    state.message = response.message;
    state.messageClass = 'danger';
    resetMessages(state.message, state.messageClass);
  }
}
