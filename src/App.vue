<template>
  <div>
    <Loading :showLoading="loading"></Loading>
    <Notification
      @close="showNotification = $event"
      :open="showNotification"
      :type="messageClass"
      :duration="2500"
      :message="message"
    ></Notification>
    <router-view/>
  </div>
</template>
<script>
import Loading from "@/components/Loading";
import Notification from "@/components/Notification";
export default {
  components: {
    Loading,
    Notification
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    messageClass() {
      return this.$store.state.messageClass;
    },
    message() {
      return this.$store.state.message;
    }
  },
  watch: {
    loading(newValue) {
      this.showNotification = !newValue;
    }
  },
  data() {
    return {
      showNotification: false
    };
  }
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
