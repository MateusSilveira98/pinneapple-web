<template>
  <article class="products">
    <section class="section">
      <div class="container">
        <h1 class="title">Produtos</h1>
        <div class="results" v-for="product in allProducts" :key="product.name">
          <div class="product">
            <span>{{product.name}}</span>
            <div class="icons">
              <span @click="handleTable()">
                <i v-if="!openTable" class="fa fa-eye"></i>
                <i v-else class="fa fa-eye-slash"></i>
              </span>
              <router-link class="has-text-white" :to="`produtos/editar/${product._id}`">
                <i class="fa fa-edit"></i>
              </router-link>
              <i class="fa fa-trash-o"></i>
            </div>
          </div>
          <div class="wrap-tables" v-if="showTable">
            <div
              :class="openTable ? 'fadeInDown animated' : 'fadeOutUp animated'"
              class="table-desktop"
            >
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Descrição</th>
                    <th>Nota interna</th>
                    <th>Data de criação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img :src="product.image" :alt="product.name">
                    </td>
                    <td>
                      <textarea v-model="product.description" class="textarea" readonly></textarea>
                    </td>
                    <td>
                      <div class="is-flex">
                        <span class="rate" v-for="index in [1,2,3,4,5]" :key="index">
                          <span v-if="product.internRate >= index">
                            <i class="fa fa-star"></i>
                          </span>
                          <span v-else>
                            <i class="fa fa-star-o"></i>
                          </span>
                        </span>
                      </div>
                    </td>
                    <td>{{product.createdAt | brDate}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              :class="openTable ? 'fadeInDown animated' : 'fadeOutUp animated'"
              class="table-mobile"
            >
              <div class="row">
                <div class="header">
                  <span>Foto</span>
                </div>
                <div class="body has-text-centered">
                  <img :src="product.image" :alt="product.name">
                </div>
              </div>
              <div class="row">
                <div class="header">
                  <span>Descrição</span>
                </div>
                <div class="body">
                  <p class="description">{{product.description}}</p>
                </div>
              </div>
              <div class="row">
                <div class="header">
                  <span>Nota interna</span>
                </div>
                <div class="body">
                  <div class="is-flex">
                    <span class="rate" v-for="index in [1,2,3,4,5]" :key="index">
                      <span v-if="product.internRate >= index">
                        <i class="fa fa-star"></i>
                      </span>
                      <span v-else>
                        <i class="fa fa-star-o"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="header">
                  <span>Data de criação</span>
                </div>
                <div class="body">
                  <span>{{product.createdAt | brDate}}</span>
                </div>
              </div>
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
      openTable: false,
      showTable: false
    };
  },
  computed: {
    allProducts() {
      return this.$store.state.Products.all;
    }
  },
  methods: {
    handleTable() {
      this.openTable = !this.openTable;
      if (this.openTable) this.showTable = !this.showTable;
      else
        setTimeout(() => {
          this.showTable = !this.showTable;
        }, 1000);
    }
  },
  async mounted() {
    await this.$store.dispatch("getAllProducts");
  }
};
</script>

<style>
</style>
