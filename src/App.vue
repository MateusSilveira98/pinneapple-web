<template>
  <div>
    <Loading :show='loading'> </Loading>
    <router-view/>
  </div>
</template>
<script>
import Loading from '@/components/Loading'
export default {
  components: {
    Loading
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
