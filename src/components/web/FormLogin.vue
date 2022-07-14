<template>
  <form action="#" method="post" @submit.prevent>
    <input class="input-form" type="text" name="username" id="name" placeholder="E-mail" autocomplete="off" v-model="email">
    <input class="input-form" type="password" name="password" id="password" placeholder="Senha" v-model="password" autocomplete="off">
    <input class="btn-submit" type="submit" value="Entrar" @click="authentication">
  </form>
</template>

<script>
export default {
  name: "FormLogin",
  emits: ['authenticate'],
  methods: {
    authentication: function () {
      this.$emit('authenticate',
                { data: {
                    username: this.email,
                      password: this.password
                    }})
    }
  },
  data () {
    return {
      email: null,
      password: null
    }
  }

}
</script>

<style scoped>
  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 5vh 3vw;
  }

  form .input-form {
    width: 100%;
    height: 5vh;
    border: none;
    border-radius: 2px;
    padding: 5px 10px;
    background-color: #f4f4f4;
    outline: none;
    transition: .3s ease-in-out;
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--color-text-light);
  }

  form .input-form:focus {
    background-color: #ececec;
  }

</style>