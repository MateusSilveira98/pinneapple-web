<template>
  <article class="product-register">
    <ProductForm @cancel="cancel" @save="create" :title="'Criar produto'"></ProductForm>
  </article>
</template>

<script>
import ProductForm from "./ProductForm";
export default {
  components: {
    ProductForm
  },
  computed: {
    success() {
      return this.$store.state.success;
    }
  },
  methods: {
    cancel(value) {
      this.$router.replace('/');
    },
    async create(product) {
      await this.$store.dispatch('createProduct', product);
      if(this.success) this.cancel();
    }
  }
};
</script>

<style>
</style>
