<template>
  <article class="user-edit">
    <UserForm v-if='user' @cancel='cancel' @save='edit' :userProp='user' :title='"Editar perfil"'></UserForm>
    <p v-else class="has-text-danger"> Usuário não encontrado </p>
  </article>
</template>

<script>
import UserForm from './UserForm';
export default {
  components: {
    UserForm
  },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    success() {
      return this.$store.state.success;
    },
    loggedUser() {
      return this.$store.state.Users.loggedUser
    }
  },
  watch: {
    loggedUser(newValue) {
      this.user = newValue;
    }
  },
  methods: {
    cancel(value) {
      this.$router.push('/');
    },
    async edit(user) {
      await this.$store.dispatch('editUser', user);
      if(this.success) this.$router.replace('/');
    },
  },
  mounted() {
    this.$store.dispatch('getLoggedUser');
  }
}
</script>

<style>

</style>
