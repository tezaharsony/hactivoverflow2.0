import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index'
vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    thread: [],
    postThread: [],
    Login: []
  },
  mutations: {
    getUser (state, payload) {
      state.user = payload
    },
    getThread (state, payload) {
      state.thread = payload
    },
    postThread (state, payload) {
      console.log('postthread')
      state.thread.push(payload)
    },
    Login (state, payload) {
      state.Login = payload
    }
  },
  actions: {
    AllUser (store) {
      axios.get('http://localhost:3000/api/users', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log('-------->>>' + response)
          store.commit('getUser', response.data)
        })
    },
    AllThread (store) {
      axios.get('http://localhost:3000/api/threads', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log('-------->>>' + response)
          store.commit('getThread', response.data)
        })
    },
    Submit (store, payload) {
      axios.post('http://localhost:3000/api/threads', {
        title: payload.title,
        thread: payload.thread
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(response => {
        store.commit('postThread', response.data)
      })
    },
    Login (store, payload) {
      console.log('ini action login')
      axios.post('http://localhost:3000/api/login', {
        name: payload.name,
        password: payload.password
      })
      .then(response => {
        console.log(response.data)
        if (response.data !== 'please type your correct password') {
          store.commit('Login', response.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', response.data.name)
          router.push('/thread')
        } else {
          alert(response.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})
