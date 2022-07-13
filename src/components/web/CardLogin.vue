<template>
  <div id="card-login">
    <div id="logo_company">
      <img src="/img/company/age.png" alt="age_telecom">
    </div>
    <div class="trigger" v-if="status === false">
      {{ msg }}
    </div>
    <FormLogin
      @authenticate="authentication"
    />
    <div id="divisor">
      <div>

      </div>
    </div>
    <div id="forgot-password">
        <router-link id="forgot-link" to="/recuperar-senha">Esqueceu sua senha?</router-link>
    </div>
  </div>
</template>

<script>

import FormLogin from "@/components/web/FormLogin"
import axios from "@/services/api.ts"
import VueCookies from "vue-cookies";

export default {
  name: "CardLogin",
  props: {
  },
  components: {
    FormLogin
  },
  data() {
    return {
      msg: 'Usuário ou senha incorretos!',
      status: true
    }
  },
  methods: {
    authentication: function (data) {
      const dados = data.data

      axios({
        method: "POST",
        url: "http://localhost:8000/api/login",
        headers: {
          "Content-Type": "application/json"
        },
        data: dados

      })
          .then((res) => {

            const user = res.data

            this.msg = user.msg
            this.status = user.status

            if(user.token) {

              $cookies.set("token", user.token, "1d")
              $cookies.set("email", user.email, "1d")
              $cookies.set("user_id", user.user_id, "1d")
              $cookies.set("privilegio", user.privilege, "1d")

              this.$router.replace("age")
            }

      })
          .catch((error) => {

          })
    },
  }

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


  #card-login {
    width: 30vw;
    height: 75vh;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 9vh;
  }

  #logo_company {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    border-bottom: 1px solid #cccccc50;
  }

  #logo_company img {
    width: 10vw;
    height: auto;
  }

  #divisor {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1vh 0;
  }

  #divisor div {
    background-color: #cccccc70;
    width: 60%;
    height: 2px;
  }

  #forgot-password {
    width: 100%;
    margin-top: 2vh;
    text-align: center;
  }

  #forgot-link {
    text-decoration: none;
    color: var(--color-text-light);
    font-size: 1.4rem;
    font-weight: 600;
    font-family: 'Open Sans';
  }



</style>