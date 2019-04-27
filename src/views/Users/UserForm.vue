<template>
  <article class="user-form">
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title">{{title}}</p>
              <form @submit.prevent="save(user)">
                <div class="field">
                  <label class="label">Nome:</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="seu nome aqui: Fulano Costa"
                      v-model="user.name"
                      v-validate="'required'"
                      name="nome"
                    >
                  </div>
                  <span
                    v-if="errors.has('nome')"
                    class="has-text-danger"
                  >{{ errors.first('nome') }}</span>
                </div>
                <div class="field">
                  <label class="label">Email:</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="exemplo@ex.com"
                      v-model="user.email"
                      v-validate="'required|email'"
                      name="email"
                    >
                  </div>
                  <span
                    v-if="errors.has('email')"
                    class="has-text-danger"
                  >{{ errors.first('email') }}</span>
                </div>
                <div class="field">
                  <label class="label">Senha:</label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="no máximo 6 caractéres"
                      maxlength="6"
                      v-model="user.password"
                      v-validate="'required|min:6'"
                      name="senha"
                    >
                  </div>
                  <span
                    v-if="errors.has('senha')"
                    class="has-text-danger"
                  >{{ errors.first('senha') }}</span>
                </div>
                <div class="field is-grouped is-flex is-justify-right">
                  <div class="control">
                    <a class="button is-default" @click="cancel()">Cancelar</a>
                  </div>
                  <div class="control">
                    <input type="submit" class="button is-success" value="Salvar">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    user: Object
  },
  methods: {
    async save(user) {
      const isValid = await this.$validator.validate();
      if (isValid) this.$emit("save", user);
    },
    cancel() {
      this.$emit("cancel", true);
    }
  }
};
</script>

<style>
</style>
