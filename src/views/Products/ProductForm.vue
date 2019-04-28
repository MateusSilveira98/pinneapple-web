<template>
  <article class="product-form">
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title">{{title}}</p>
              <form @submit.prevent="save(product)">
                <div class="field">
                  <label class="label">Foto do produto:</label>
                  <div class="control">
                    <PhotoUpload
                      :src='product.image'
                      @remove='handleImage'
                      @upload='uploadImage'
                      :uploadButtonText='"Selecionar"'
                      :removeButtonText='"Remover"'
                    ></PhotoUpload>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Nome do produto:</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="nome do produto"
                      v-model="product.name"
                      v-validate="'required'"
                      name="nome"
                    >
                  </div>
                  <span v-if="errors.has('nome')" class="has-text-danger">{{ errors.first('nome') }}</span>
                </div>
                <div class="field">
                  <label class="label">Descrição do produto</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="sobre o produto, características"
                      v-model="product.description"
                      v-validate="'required'"
                      name="descrição"
                    ></textarea>
                  </div>
                  <span
                    v-if="errors.has('descrição')"
                    class="has-text-danger"
                  >{{ errors.first('descrição') }}</span>
                </div>
                <div class="field">
                  <label class="label">Nota interna do produto:</label>
                  <div class="control">
                    <span class="rate" v-for="index in [1,2,3,4,5]" :key="index">
                      <span v-if="product.internRate >= index" @click="handleInternRate(index)">
                        <i class="fa fa-star"></i>
                      </span>
                      <span v-else @click="handleInternRate(index)">
                        <i
                          @mouseover="rateIcon.hover = true; rateIcon.index = index"
                          @mouseleave="rateIcon.hover = false; rateIcon.index = index"
                          :class="rateIcon.hover && rateIcon.index == index ? 'fa fa-star' : 'fa fa-star-o'"
                        ></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Status do produto:</label>
                  <div class="control">
                    <span @click="product.status = !product.status" class="rate">
                      <span v-if='product.status'>
                        <i class="fa fa-toggle-on"></i>
                      </span>
                      <span v-else>
                        <i class="fa fa-toggle-off"></i>
                      </span>
                      <span class="has-text-black	">{{product.status | boolFormat('Disponível', 'Indisponível')}}</span>
                    </span>
                  </div>
                </div>
                <div class="field is-grouped is-flex is-justify-right">
                  <div class="control">
                    <a class="button is-default" @click="cancel()">Cancelar</a>
                  </div>
                  <div class="control">
                    <input type="submit" class="button is-pineapple" value="Salvar">
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
import PhotoUpload from '@/components/PhotoUpload';
export default {
  components: {
    PhotoUpload
  },
  props: {
    title: String,
    productProp: Object
  },
  computed: {
    image() {
      return this.$store.state.image;
    }
  },
  data() {
    return {
      product: {
        internRate: 1,
        status: true,
        image: ''
      },
      rateIcon: {
        hover: false,
        index: 1
      }
    };
  },
  watch: {
    productProp(value) {
      this.product = value;
    },
    image(newValue) {
      this.product.image = newValue.url;
    }
  },
  methods: {
    async uploadImage(file, imageLink){
      await this.$store.dispatch('uploadImageToStorage', file);
    },
    handleImage(value) {
      this.product.image = value;
    },
    handleInternRate(index) {
      this.product.internRate =
        this.product.internRate == index ? --this.product.internRate : index;
    },
    async save(product) {
      const isValid = await this.$validator.validate();
      if (isValid) this.$emit("save", product);
    },
    cancel() {
      this.$emit("cancel", true);
    }
  }
};
</script>

<style>
</style>
