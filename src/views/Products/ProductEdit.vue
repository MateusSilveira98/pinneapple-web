<template>
  <article class="product-edit">
    <ProductForm @cancel="cancel" :productProp='selected' @save="edit" :title="'Editar produto'"></ProductForm>
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
    },
    selected() {
      return this.$store.state.Products.selected;
    }
  },
  methods: {
    cancel(value) {
      this.$router.replace('/');
    },
    async edit(product) {
      await this.$store.dispatch('editProduct', product);
      if(this.success) this.cancel();
    }
  },
  async mounted() {
    await this.$store.dispatch('getProductById', this.$route.params.id);
  }
};
</script>

<style>
</style>
