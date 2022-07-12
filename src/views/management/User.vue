<template>
    <div class="modal">
        <div class="card-modal">
          <div class="btn-close">
            <i class="fi fi-sr-cross-small" @click="close()"></i>
          </div>
          <Loading
            v-if="loading === true"
          />
        </div>
    </div>
</template>

<script>

import Loading from "@/components/Loading";
import axios from "axios";

export default {
  name: "User",
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  components: {
    Loading
  },
  data() {
    return {
      loading: true,
      data: {}
    }
  },
  methods: {
    close: function () {
      this.$emit('page-user', {
        data: 0
      })
    },
    getUser: function (id) {

      axios({
        method: "GET",
        url: "http://localhost:8000/api/users/"+id,
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
        }
      })
          .then((res) => {

            this.data = res.data
            console.log(res.data)
            this.loading = false

          })
          .catch((error) => {

          })
    }
  },
  created() {
      this.getUser(this.id)
  },
  mounted() {
  }
}
</script>

<style scoped>

  .loading {
    height: 80vh;
  }

  .card-modal {
    width: 70vw;
    height: 90vh;
    padding: 0 10px;
  }

</style>