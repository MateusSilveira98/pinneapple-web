<template>
  <article class="login">
    <section class="section">
      <div class="container">
        <h2 class="title">Login</h2>
        <div class="card">
          <header>
            <div class="card-image">
              <figure class="image is-128x128">
                <img
                  src="https://res.cloudinary.com/mateus-costa/image/upload/v1556306089/wtt/pineapple.png"
                  alt="logo"
                >
              </figure>
            </div>
            <p class="subtitle has-text-centered">Pineapple System</p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Email" v-model="user.email">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    v-model="user.password"
                    @keyup.enter="login(user)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success is-fullwidth" @click="login(user)">Entrar</button>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <router-link
                  :to="`usuarios/cadastro`"
                  class="button is-primary is-fullwidth"
                >Cadastrar</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  computed: {
    messageClass() {
      return this.$store.state.messageClass;
    }
  },
  methods: {
    login(user) {
      this.$store.dispatch("login", user).then(() => {
        if (this.messageClass == 'success') {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
