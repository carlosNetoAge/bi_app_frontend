<template>
  <div class="app-container">
    <Menu
      @page-item="pageItem"
    />
    <div class="content-container">
        <template v-if="data !== null">
          <h6>{{ data.subitem }}</h6>
          <iframe width="100%" height="90%" :src="data.iframe" frameborder="0" allowFullScreen="true"></iframe>
        </template>
    </div>
  </div>
</template>

<script>

import Menu from "@/components/app/Menu";

export default {
  name: "Age",
  components: {
    Menu
  },
  data() {
    return {
      data: null,
      step: 1
    }
  },
  methods: {
    pageItem: function (data) {
      this.data = data.data
      this.step = 0
    },


  },
  created() {
  },
  mounted() {
    document.title = "Indicadores - Age Telecom"
  }

}
</script>

<style scoped>

  .content-container h6 {
    font-size: 2.4rem;
    color: #646464;
    font-weight: 500;
    margin-bottom: 1vh;
  }


</style>