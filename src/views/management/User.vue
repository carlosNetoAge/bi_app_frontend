<template>
    <div class="modal">
        <div class="card-modal">
          <div class="btn-close">
            <i class="fi fi-sr-cross-small" @click="close()"></i>
          </div>
          <div class="content-card-modal">
            <div id="menu-user">
              <div id="menu">
                <div class="card-menu">
                  <div class="header-card">
                    <i class="fi fi-rr-settings"></i>
                    <span>Gerenciamento</span>
                  </div>
                  <div class="main-card">
                    <nav>
                      <ul>
                        <li :class="{ activeClass : step === 1 }" @click="stepsMenu(1)">
                          <div>
                            <i class="fi fi-rr-id-badge"></i>
                            <span>Dados gerais</span>
                          </div>
                        </li>
                        <li :class="{ activeClass : step === 2 }" @click="stepsMenu(2)">
                          <div>
                            <i class="fi fi-rr-settings-sliders"></i>
                            <span>Permissões</span>
                          </div>
                        </li>
<!--                        <li :class="{ activeClass : step === 3 }" @click="stepsMenu(3)">-->
<!--                          <div>-->
<!--                            <i class="fi fi-rr-pulse"></i>-->
<!--                            <span>Log de acesso</span>-->
<!--                          </div>-->
<!--                        </li>-->
                      </ul>
                    </nav>
                  </div>

                </div>

              </div>
            </div>
            <div id="content" v-if="step === 1">
              <div class="section-content" style="min-height: 30vh">
                <table v-if="loading === false">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Nome</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>{{ data.id }}</td>
                    <template v-if="data.ativo === 1">
                      <td>Ativo</td>
                    </template>
                    <template v-else>
                      <td>Inativo</td>
                    </template>
                    <td>{{ data.nome }} {{ data.sobrenome }}</td>
                  </tr>
                  </tbody>
                </table>
                <table v-if="loading === false">
                  <thead>
                  <tr>
                    <th>Nível de usuário</th>
                    <th>Data do cadastro</th>
                    <th>E-mail</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <template v-if="data.privilegio === 1">
                        Administrador
                      </template>
                      <template v-else>
                        Padrão
                      </template>
                    </td>
                    <td>{{ data.registrado_em }}</td>
                    <td>{{ data.email }}</td>
                  </tr>
                  </tbody>
                </table>
                <Loading
                    v-if="loading === true"
                />
              </div>
            </div>
            <div id="content" v-if="step === 2">
              <div class="section-content" style="min-height: 67vh">
                <AllowedMenu
                  :id="data.id"
                />
              </div>
            </div>
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
import AllowedMenu from "@/components/app/management/user/AllowedMenu";

export default {
  name: "User",
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  components: {
    Loading,
    AllowedMenu
  },
  data() {
    return {
      loading: true,
      data: {},
      step: 1
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
            this.loading = false

          })
          .catch((error) => {

          })
    },
    stepsMenu: function (step) {
      this.step = step
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
    height: 100%;
  }

  .card-modal {
    width: 90vw;
    height: 90vh;
    padding: 0 10px;
    background-color: #F5F6FA;
  }

  .content-card-modal {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }

  #menu-user {
    width: 25%;
    height: 100%;
    padding: 10px;
  }

  #content {
    width: 72%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    gap: 2rem;
  }

  .section-content {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px 0px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .section-content table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }

  .section-content table thead tr {
    background-color: #CCCBCA20;
    border-top: 2px solid #cccccc40;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: .2px;
    text-align: left;
    height: 5vh;
  }

  .section-content table thead tr th {
    padding: 0 1vw;
  }

  .section-content table tr th:nth-child(1) {
    width: 30%;
  }

  .section-content table tr th:nth-child(2) {
    width: 30%;
  }

  .section-content table tr th:nth-child(3) {
    width: 35%;
  }

  .section-content table tbody tr {
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: .2px;
  }

  .section-content table tbody tr td {
    padding: 0 0 0 1vw;
    height: 5vh;
  }

  #menu {
    width: 100%;
    height: 100%;
    padding: 5px;
  }

  .card-menu {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }

  .header-card {
    width: 100%;
    padding: 1vh 2vw;
    background-color: #0f297d;
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .header-card i {
    font-size: 2rem;
    color: #fff;
  }

  .header-card span {
    font-size: 1.4rem;
    color: #fff;
    letter-spacing: .2px;
    font-weight: 600;
  }

  .main-card {
    width: 100%;
    height: 76%;
  }

  .main-card nav, .main-card ul {
    width: 100%;
    height: 100%;
  }


  .main-card nav ul li {
    width: 100%;
    padding: 10px 2vw;
    display: flex;
    align-items: center;
    gap: .5rem;
    border-bottom: 1px solid #cccccc90;
    transition: .2s ease-in-out;
    cursor: pointer;
  }

  .main-card nav ul li div {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .main-card nav ul li div i {
    font-size: 1.8rem;
    transition: .2s ease-in-out;
    color: #51504F;
  }

  .main-card nav ul li:hover > div i {
    color: #fa860d !important;
  }

  .main-card nav ul li span {
    padding: 0 0 .5vh 0;
    transition: .2s ease-in-out;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: .2px;
    color: #51504F;
  }

  .main-card nav ul li:hover > div span {
    color: #0f297d;
  }

  .main-card li:hover {
    background-color: #cccccc20;
  }

  .activeClass {
    background-color: #F5F6FA;
    display: block;
  }

  .activeClass div i {
    color: #fa860d !important;
  }

  .activeClass div span {
    color: #0f297d !important;
  }

</style>