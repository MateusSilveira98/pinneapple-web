<template>
  <article class="product-register">
    <ProductForm @cancel="cancel" @save="create" :title="'Cadastro de produtos'"></ProductForm>
  </article>
</template>

<script>
import ProductForm from "./ProductForm";
export default {
  components: {
    ProductForm
  },
  computed: {
    messageClass() {
      return this.$store.state.messageClass;
    }
  },
  methods: {
    cancel(value) {
      this.$router.replace('/');
    },
    async create(product) {
      await this.$store.dispatch('createProduct', product);
      if(this.messageClass == 'success') this.cancel();
    }
  }
};
</script>

<style>
</style>
