<template>
  <article class="products">
    <section class="section">
      <div class="container">
        <h1 class="title">Produtos</h1>
        <router-link :to='`produtos/cadastro`' class="button is-outlined is-pineapple">Criar produto</router-link>
        <template v-if='allProducts.length > 0'>
        <div class="results" v-for="product in allProducts" :key="product._id">
          <div class="product">
            <span>{{product.name}}</span>
            <div class="icons">
              <span>
                <i @click="handleTable(product.name, 'close')" :title='`Fechar vizualização ${product.name}`' v-if="findTableName(product.name)" class="fa fa-eye"></i>
                <i @click="handleTable(product.name, 'open')" :title='`Vizualizar ${product.name}`'  v-else class="fa fa-eye-slash"></i>
              </span>
              <router-link class="has-text-white" :to="`produtos/editar/${product._id}`">
                <i :title='`Editar produto: ${product.name}`' class="fa fa-edit"></i>
              </router-link>
              <i :title='`Excluir produto: ${product.name}`' @click='handleModal(product)' class="fa fa-trash-o"></i>
            </div>
          </div>
          <div class="wrap-tables" v-if="findTableName(product.name)">
            <div
              :class="showTable[showTable.indexOf(findTableName(product.name))].type == 'open' ? 'fadeInDown animated' : 'fadeOutUp animated'"
              class="table-desktop"
            >
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Descrição</th>
                    <th>Nota interna</th>
                    <th>Status</th>
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
                    <td>{{product.status | boolFormat('Disponível', 'Indisponível')}}</td>
                    <td>{{product.createdAt | brDate}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              :class="showTable[showTable.indexOf(findTableName(product.name))].type == 'open' ? 'fadeInDown animated' : 'fadeOutUp animated'"
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
                  <span>Status</span>
                </div>
                <div class="body">
                  <span>{{product.status | boolFormat('Disponível', 'Indisponível')}}</span>
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
        </template>
        <template v-else>
          <p>Nenhum produto encontrado</p>
        </template>
      </div>
      <ConfirmModal 
        @send='deleteProduct'  
        @close='handleModal' 
        :text="textToModal" 
        :showModal='showModal' 
        :item='productToModal'
        :title="'Excluir produto'"
      ></ConfirmModal>
    </section>
  </article>
</template>

<script>
import ConfirmModal from '@/components/ConfirmModal';
export default {
  components: {
    ConfirmModal
  },
  data() {
    return {
      showTable: [],
      showModal: false,
      productToModal: {},
      textToModal: ''
    };
  },
  computed: {
    allProducts() {
      return this.$store.state.Products.all;
    }
  },
  methods: {
    handleModal(product) {
      this.showModal = !this.showModal;
      if(this.showModal) {
        this.productToModal = product;
        this.textToModal = `quer excluir este produto? ${product.name}`;
      }
      else {
        this.textToModal = '';
        this.productToModal = {};
      }
    },
    findTableName(name) {
      return this.showTable.find(table => table.name == name);
    },
    handleTable(name, type) {
      let tableName = this.findTableName(name);
      if (tableName){
        tableName.type = 'close';
        setTimeout(() => {
          tableName.type = 'open';
          this.showTable.splice(this.showTable.indexOf(tableName), 1);
        }, 480);
      }
      else {
        this.showTable.push({name, type});
      }
    },
    async deleteProduct(product) {
      product.deleted = true;
      await this.$store.dispatch('editProduct', product);
      await this.$store.dispatch("getAllProducts");
    }
  },
  async mounted() {
    await this.$store.dispatch("getAllProducts");
  }
};
</script>

<style>
</style>
