<template>
  <div class="app-container">
      <div class="card-content">
        <div class="menu-card">
          <Menu/>
        </div>
        <div class="content-card">
          <div class="section-content">
            <div class="header-section">
              <i class="fi fi-rr-eye"></i>
              <span>Visão geral</span>
            </div>
            <div class="main-section">
              <div class="card-main">
                <template v-if="loading === false">
                  <div>
                    <i class="fi fi-sr-user"></i>
                    <span>{{ data.usuarios_contagem }}</span>
                  </div>
                  <span>Usuários</span>
                </template>
                <Loading
                v-if="loading === true"/>
              </div>
              <div class="card-main">
                <template v-if="loading === false">
                  <div>
                    <i class="fi fi-sr-apps"></i>
                    <span>{{ data.menu_contagem }}</span>
                  </div>
                  <span>Menus</span>
                </template>
                <Loading
                    v-if="loading === true"/>
              </div>
              <div class="card-main">
                <template v-if="loading === false">
                  <div>
                    <i class="fi fi-sr-chart-pie-alt"></i>
                    <span>{{ data.dashboard_contagem }}</span>
                  </div>
                  <span>Dashboards</span>
                </template>
                <Loading
                    v-if="loading === true"/>
              </div>
              <div class="card-main">
                <template v-if="loading === false">
                  <div>
                    <i class="fi fi-sr-chart-histogram"></i>
                    <span>{{ data.visitas_contagem }}</span>
                  </div>
                  <span>Visitas</span>
                </template>
                <Loading
                    v-if="loading === true"/>
              </div>
            </div>
          </div>
          <div class="section-content-last-users">
            <div class="header-section" style="background-color: #F5F6FA; padding: 2vh 2vw; border-bottom: 2px solid #cccccc60">
              <span style="color: #51504F; padding: 0; ">Últimos usuários cadastrados</span>
            </div>
            <div>
              <table v-if="loading === false">
                <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Entrou em</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="user in data.usuarios" @click="pageUser(user.id, 1)">
                      <td>{{ user.nome }} {{ user.sobrenome }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.registrado_em }}</td>
                    </tr>
                </tbody>
              </table>
              <Loading
                v-if="loading === true"
              />
            </div>
          </div>
        </div>
      </div>
      <User
          v-if="user.status === true"
          :id="user.id"
          @page-user="pageUser(data)"
      />
  </div>



</template>

<script>

import Menu from "@/components/app/management/Menu";
import axios from "axios";
import Loading from "@/components/Loading";
import User from "@/views/management/User";

export default {
  name: "Management",
  components: {
    Menu,
    Loading,
    User
  },
  data() {
    return {
      data: {

      },
      loading: true,
      user: {
        status: false,
        id: 0
      }
    }
  },
  methods: {
    getInfo: function () {

      axios({
        method: "GET",
        url: "https://v1.easytools.dev.br/api/info-geral",
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
        }
          })
          .then((res) => {

            this.data = res.data
            this.loading = false
            this.dateFormated()

          })
          .catch((error) => {

          })
    },
    pageUser: function (id, action) {

      if(action === 1) {

        this.user.id = id
        this.user.status = true

      } else {

        this.user.id = 0
        this.user.status = false

      }

    },
    dateFormated: function () {

    }
  },
  created() {
    this.getInfo()
  },
  mounted() {}

}
</script>

<style scoped>

  .loading {
    height: 40vh;
  }

  .app-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .card-content {
    width: 90vw;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .menu-card {
    width: 25%;
    height: 100%;
  }

  .content-card {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 5px;
  }

  .section-content {
    width: 100%;
    height: 37%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }

  .header-section {
    width: 100%;
    padding: 1vh 2vw;
    background-color: #0f297d;
    display: flex;
    align-items: center;
    gap: .5rem;
    border-radius: 5px 5px 0 0;
  }

  .header-section i {
    font-size: 2rem;
    color: #fff;
  }

  .header-section span {
    font-size: 1.6rem;
    color: #fff;
    letter-spacing: .2px;
    font-weight: 600;
  }

  .main-section {
    width: 100%;
    padding: 2vh 2vw;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-around;
  }

  .card-main {
    background-color: #F9F8F8;
    width: 20%;
    height: 20vh;
    border: 2px solid #cccccc40;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-main div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1vh 0;
    color: #51504F;

  }

  .card-main div i {
    font-size: 2.8rem;
  }

  .card-main div span {
    font-size: 2.2rem;
    padding: 0 0 1vh 0;
    font-weight: 600;
  }

  .card-main span {
    color: #51504F;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: .2px;
  }

  .section-content-last-users {
    background-color: #fff;
    height: 65%;
    border: 2px solid #cccccc60;
    border-radius: 5px;
  }

  .section-content-last-users div {
    padding: 0px 10px;
  }

  .section-content-last-users table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    margin: 2vh 0 0 0;
  }

  .section-content-last-users table thead tr {
    background-color: #CCCBCA20;
    border-top: 2px solid #cccccc40;
    border-bottom: 2px solid #cccccc40;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: .2px;
    text-align: left;
  }

  .section-content-last-users table thead tr th {
    padding: 2vh 1vw;
  }

  .section-content-last-users table tbody tr {
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: .2px;
    border-bottom: 1px solid #cccccc40;
    cursor: pointer;
  }

  .section-content-last-users table tbody tr:nth-child(odd):hover {
    background-color: #cccccc30 !important;
  }

  .section-content-last-users table tbody tr:nth-child(odd) {
    background-color: #fff;
    transition: .2s ease-in-out;
  }

  .section-content-last-users table tbody tr:nth-child(even) {
    background-color: #cccccc30;
    transition: .2s ease-in-out;

  }

  .section-content-last-users table tbody tr:nth-child(even):hover {
    background-color: #cccccc40 !important;
  }

  .section-content-last-users table tbody tr td {
    padding: 2vh 1vw;
  }


</style>