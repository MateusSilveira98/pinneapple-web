<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://res.cloudinary.com/mateus-costa/image/upload/v1556306089/wtt/pineapple.png" alt="Logo">
        <span>Pineapple System</span>
      </a>
      <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">{{user.name}}</a>
          <div class="navbar-dropdown is-boxed">
            <router-link :to="'usuarios/editar'" class="navbar-item">Editar perfil</router-link>
            <a class="navbar-item" @click='logout()'>Sair</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Utils from '@/utils/index'
export default {
  props: {
    user: {type: Object, default:{name: ''}}
  },
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    logout() {
      Utils.localstorage.remove('user');
      Utils.localstorage.remove('token');
      window.location.reload();
    }
  }
};
</script>

<style lang='scss' scoped>
.navbar {
  border-bottom: 1px solid #f7b239;
  .navbar-link:not(.is-arrowless) {
    &::after {
      border-color: #f7b239;
    }
  }
}
</style>
