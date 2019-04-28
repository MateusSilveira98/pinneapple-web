<template>
  <article class="user-register">
    <UserForm @cancel='cancel' @save='create' :user='user' :title='"Criar usuário"'></UserForm>
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
    }
  },
  methods: {
    cancel(value) {
      this.$router.replace('/login');
    },
    async create(user) {
      await this.$store.dispatch('createUser', user);
      if(this.success) this.cancel();
    }
  }
}
</script>

<style>

</style>
