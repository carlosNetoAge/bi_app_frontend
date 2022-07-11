<template>
  <div id="web-container">
    <CardLogin
      v-if="show"
    />
  </div>
</template>

<script>

import App from "@/views/Age";
import CardLogin from "@/components/web/CardLogin";
import VueCookies from "vue-cookies";

export default {
  name: "Web",
  components: {
    CardLogin,
    App
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  }

}
</script>

<style scoped>



  #web-container {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }


</style>