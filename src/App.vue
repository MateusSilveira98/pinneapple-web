<template>
  <div>
    <Loading :show="loading"></Loading>
    <Notification
      @close="openNotification"
      :open="openNotification"
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
      this.openNotification = !newValue;
    }
  },
  data() {
    return {
      openNotification: false
    };
  }
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
