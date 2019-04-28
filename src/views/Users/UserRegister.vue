<template>
  <article class="user-register">
    <UserForm @cancel='cancel' @save='create' :user='user' :title='"Cadastro de Usuário"'></UserForm>
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
    messageClass() {
      return this.$store.state.messageClass;
    }
  },
  methods: {
    cancel(value) {
      this.$router.push('/login');
    },
    async create(user) {
      await this.$store.dispatch('createUser', user);
      if(this.messageClass == 'success') this.cancel();
    }
  }
}
</script>

<style>

</style>
