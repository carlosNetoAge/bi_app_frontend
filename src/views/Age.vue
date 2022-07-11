<template>
  <div class="app-container">
    <Menu
      @page-item="pageItem"
    />
    <div class="content-container">
        <template v-if="iframe !== null">
          <iframe width="100%" height="100%" :src="iframe" frameborder="0" allowFullScreen="true"></iframe>
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
      setor: '',
      iframe: null,
    }
  },
  methods: {
    pageItem: function (data) {
      this.setor = data.data
      this.iframe = data.data
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



</style>