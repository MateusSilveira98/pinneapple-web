<template>
  <article class="products">
    <section class="section">
      <div class="container">
        <h1 class="title">Produtos</h1>
        <div class="results">
          <div class="product">
            <span>Nome do produto</span>
            <div class="icons">
              <span
                :style="openTable ? {color: 'black'} : {color: 'white'}"
                @click="handleTable()"
              >
                <i class="fas fa-eye"></i>
              </span>
              <i class="far fa-edit"></i>
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
          <div class="wrap-tables" v-if='showTable'>
            <div :class="openTable ? 'fadeInDown animated' : 'fadeOutUp animated'" class="table-desktop">
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
                      <img
                        src="https://res.cloudinary.com/mateus-costa/image/upload/v1556306089/wtt/pineapple.png"
                        alt="NOME"
                      >
                    </td>
                    <td>
                      <textarea class="textarea" readonly>blblblblblblblblblblblblblblblblblblblblblblblblbl</textarea>
                    </td>
                    <td>
                      <div class="is-flex">
                        <span>
                          <i class="fas fa-star"></i>
                        </span>
                        <span>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </span>
                        <span>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </span>
                        <span>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </span>
                        <span>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </span>
                      </div>
                    </td>
                    <td>12/12/2012</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div :class="openTable ? 'fadeInDown animated' : 'fadeOutUp animated'" class="table-mobile">
              <div class="row">
                <div class="header">
                  <span>Foto</span>
                </div>
                <div class="body has-text-centered">
                  <img
                    src="https://res.cloudinary.com/mateus-costa/image/upload/v1556306089/wtt/pineapple.png"
                    alt="NOME"
                  >
                </div>
              </div>
              <div class="row">
                <div class="header">
                  <span>Descrição</span>
                </div>
                <div class="body">
                  <p class="description">blblblblblblblblblblblblblblblblblblblblblblblblbl</p>
                </div>
              </div>
              <div class="row">
                <div class="header">
                  <span>Nota interna</span>
                </div>
                <div class="body">
                  <div class="is-flex">
                    <span>
                      <i class="fas fa-star"></i>
                    </span>
                    <span>
                      <i class="far fa-star"></i>
                    </span>
                    <span>
                      <i class="far fa-star"></i>
                    </span>
                    <span>
                      <i class="far fa-star"></i>
                    </span>
                    <span>
                      <i class="far fa-star"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="header">
                  <span>Data de criação</span>
                </div>
                <div class="body">
                  <span>12/12/2012</span>
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
  methods: {
    handleTable() {
      this.openTable = !this.openTable;
      if(this.openTable) 
          this.showTable = !this.showTable;
      else
        setTimeout(() => {
          this.showTable = !this.showTable;
        }, 1000);
    }
  }
};
</script>

<style>
</style>
