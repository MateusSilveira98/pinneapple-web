const localstorage = {
  set: (label, obj) => {
    window.localStorage.setItem(label, JSON.stringify(obj))
  },
  get: (label) => {
    let string = window.localStorage.getItem(label)
    return JSON.parse(string)
  },
  remove: (label) => {
    window.localStorage.removeItem(label)
  },
  clear: () => {
    window.localStorage.clear()
  }
}
const callback = (commit, response) => {
  if (response.type == 'success') {
    commit('LOADING')
    commit('SUCCESS_MESSAGE', {response})
  } else {
    commit('LOADING')
    commit('FAIL_MESSAGE', { response })
  }
}
export default {
  localstorage,
  callback
}
