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
            <form @submit.prevent="login(user)">
              <div class="content">
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input
                      class="input"
                      type="email"
                      v-validate="'required|email'"
                      name="email"
                      placeholder="exemplo@ex.com"
                      v-model="user.email"
                    >
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </p>
                  <span
                    v-if="errors.has('email')"
                    class="has-text-danger"
                  >{{ errors.first('email') }}</span>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="sua senha aqui"
                      v-model="user.password"
                      maxlength="6"
                      v-validate="'required'"
                      name="senha"
                      @keyup.enter="login(user)"
                    >
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </p>
                  <span
                    v-if="errors.has('senha')"
                    class="has-text-danger"
                  >{{ errors.first('senha') }}</span>
                </div>
              </div>
              <div class="field">
                <p class="control">
                  <input type="submit" value="Entrar" class="button is-success is-fullwidth">
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
            </form>
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
    async login(user) {
      const isValid = await this.$validator.validate();
      if (isValid) {
        await this.$store.dispatch("login", user);
        if (this.messageClass == "success") {
          this.$store.dispatch('getLoggedUser');
          this.$router.push("/");
        }
      }
    }
  }
};
</script>
