<template>
  <div class="app-container">
    <div class="card-content">
      <div class="menu-card">
        <Menu/>
      </div>
      <div class="content-card">
        <div class="section-content-last-users" v-if="step === 1">
          <div class="header-section" style="background-color: #F5F6FA; padding: 2.5vh 2vw; border-bottom: 2px solid #cccccc60">
            <span style="color: #51504F; padding: 0; ">Todos os menus</span>
          </div>
          <div class="btn-new">
            <button @click="newMenu()">Novo menu</button>
          </div>
          <div style="overflow-y: auto; max-height: 75vh">
            <table v-if="loading === false">
              <thead>
              <tr>
                <th>ID</th>
                <th>Menu</th>
                <th style="text-align: center">Status</th>
                <th>Ações</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in data">
                <td>{{ item.id }}</td>
                <td>{{ item.item }}</td>
                <td style="text-align: center">
                  <template v-if="!item.deleted_at">
                    <span :class="{active: !item.deleted_at}"> Acessível </span>
                  </template>
                  <template v-else>
                    <span :class="{inative: item.deleted_at}"> Inacessível </span>
                  </template>
                </td>
                <td class="actions-users">
                  <template v-if="!item.deleted_at">
                    <i class="fi fi-rr-ban" style="color: var(--color-red)" @click="alterAccess(item.id, 'inative', 'menu')"></i>
                    <i class="fi fi-rr-redo" @click="alterPage(2, item.id)"></i>
                  </template>
                  <template v-else>
                    <i class="fi fi-rr-checkbox" style="color: #4AD09E" @click="alterAccess(item.id, 'active','menu')"></i>
                  </template>
                </td>
              </tr>
              </tbody>
            </table>
            <Loading
                v-if="loading === true"
            />
          </div>
        </div>
        <div class="section-content-last-users left" v-if="step === 2">
          <div class="header-section" @click="alterPage(1)" style="background-color: #F5F6FA; padding: 2vh 2vw; border-bottom: 2px solid #cccccc60; display: flex; gap: 1rem; align-items: center">
            <i class="fi fi-sr-arrow-left" style="color: #51504F; font-size: 2.2rem; cursor: pointer"></i>
            <span style="color: #51504F; padding: 0 0 .5vh 0; cursor: pointer; ">Voltar</span>
          </div>
          <div style="overflow-y: auto; max-height: 75vh">
            <table v-if="loading === false">
              <thead>
              <tr>
                <th>ID</th>
                <th>Dashboard</th>
                <th style="text-align: center">Status</th>
                <th>Ações</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in submenu">
                <td>{{ item.id }}</td>
                <td>{{ item.subitem }}</td>
                <td style="text-align: center">
                  <template v-if="!item.deleted_at">
                    <span :class="{active: !item.deleted_at}"> Acessível </span>
                  </template>
                  <template v-else>
                    <span :class="{inative: item.deleted_at}"> Inacessível </span>
                  </template>
                </td>
                <td class="actions-users">
                  <template v-if="!item.deleted_at">
                    <i class="fi fi-rr-ban" style="color: var(--color-red)" @click="alterAccess(item.id, 'inative', 'submenu')"></i>
                    <i class="fi fi-rr-edit" @click="alterPage(3, item.id)"></i>
                  </template>
                  <template v-else>
                    <i class="fi fi-rr-checkbox" style="color: #4AD09E" @click="alterAccess(item.id, 'active', 'submenu')"></i>
                  </template>
                </td>
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
    <div class="modal" v-if="step === 3">
      <div class="card-modal">
        <div class="btn-close">
          <i class="fi fi-sr-cross-small" @click="alterPage(2, item_id )"></i>
        </div>
        <div class="content-card-modal">
          <div class="form-card">
            <div class="card-form">
              <label for="iframe">Link do iframe - {{ submenu_unique.subitem }}</label>
              <span>Antigo:</span>
              <input type="text" name="iframe" id="iframe" :value="submenu_unique.iframe" disabled>
              <span>Novo:</span>
              <input type="text" name="iframe" id="iframe" v-model="iframe">
              <input type="submit" class="btn-submit" value="Salvar" @click="alterIframe(submenu_unique.id)">
            </div>
          </div>
          <div class="bi-represent">
            <h6>Pré visualização</h6>
            <div class="iframe-represent">
              <iframe width="100%" height="90%" :src="iframe" frameborder="0" allowFullScreen="true"></iframe>
            </div>
          </div>
        </div>
        </div>
    </div>
    <div class="modal" v-if="step === 4">
      <div class="card-modal" style="width: 40vw; height: 20vw; padding: 3vh 2vw">
        <div class="new-item">
            <h6>Novo Menu</h6>
          <div class="form-new-item">
            <label for="menu">Nome</label>
            <input type="text" name="menu" id="menu">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Loading from "@/components/Loading";
import Menu from "@/components/app/management/Menu";
import axios from "axios";
import loading from "@/components/Loading";

export default {
  name: "Dashboard",
  components: {
    Loading,
    Menu
  },
  data () {
    return {
      loading: true,
      data: {},
      submenu: {},
      submenu_unique: {},
      response: null,
      msg: '',
      step: 4,
      iframe: '',
      item_id: 0
    }
  },
  methods: {
    getMenus: function () {

      axios({
        method: "GET",
        url: "http://localhost:8000/api/menu_items",
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
    getSubMenus: function (id) {

      axios({
        method: "GET",
        url: "http://localhost:8000/api/sub_menus/"+id,
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
        }
      })
          .then((res) => {

            this.item_id = id
            this.submenu = res.data
            this.loading = false

          })
          .catch((error) => {

          })
    },
    getSubMenu: function (id) {

        axios({
          method: "GET",
          url: "http://localhost:8000/api/sub_menu/"+id,
          headers: {
            "Content-Type": "application/json",
            "authorization": $cookies.get('token'),
          }
        })
            .then((res) => {

              this.submenu_unique = res.data
              this.iframe = this.submenu_unique.iframe
              this.loading = false

            })
            .catch((error) => {

            })
    },
    alterAccess: function (id, action, type) {

      this.loading = true

      if(action === 'active'){

        if(type === 'menu') {

            axios({
              method: "GET",
              url: "http://localhost:8000/api/menu_items/create",
              headers: {
                "Content-Type": "application/json",
                "authorization": $cookies.get('token'),
                "item_id": id
              }
            })
                .then((res) => {

                  this.response = res.data
                  this.msg = this.response.msg
                  this.getMenus()


                })
                .catch((error) => {

                })
        }

        if(type === 'submenu') {

          axios({
            method: "GET",
            url: "http://localhost:8000/api/sub_menus/create",
            headers: {
              "Content-Type": "application/json",
              "authorization": $cookies.get('token'),
              "subitem_id": id
            }
          })
              .then((res) => {

                this.getSubMenus(this.item_id)

              })
              .catch((error) => {

              })

        }

      }

      if(action === 'inative') {

          if(type === 'menu') {
            axios({
              method: "DELETE",
              url: "http://localhost:8000/api/menu_items/"+id,
              headers: {
                "Content-Type": "application/json",
                "authorization": $cookies.get('token'),
              }
            })
                .then((res) => {

                  this.response = res.data
                  this.msg = this.response.msg
                  this.getMenus()

                })
                .catch((error) => {

                })
          }

          if(type === 'submenu') {

              axios({
                method: "DELETE",
                url: "http://localhost:8000/api/sub_menus/"+id,
                headers: {
                  "Content-Type": "application/json",
                  "authorization": $cookies.get('token'),
                }
              })
                  .then((res) => {

                    this.getSubMenus(this.item_id)

                  })
                  .catch((error) => {

                  })

          }
      }
    },
    alterPage: function (step, id) {
      this.step = step

      if(step === 2) {
        this.loading = true
        this.getSubMenus(id)
      }

      if(step === 3) {
        this.loading = true
        this.getSubMenu(id)
      }
    },
    alterIframe: function (id) {

      axios({
        method: "POST",
        url: "http://localhost:8000/api/sub_menu/iframe",
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
        },
        data: {
          iframe: this.iframe,
          subitem_id: this.submenu_unique.id
        }
      })
          .then((res) => {

            this.submenu_unique = res.data
            this.loading = false

          })
          .catch((error) => {

          })

    },
    newMenu: function () {
      alert("novo")
    }
  },
  mounted() {
    this.getMenus()
  }
}
</script>

<style scoped>

  .card-modal {
    width: 90vw;
    height: 90vh;
  }

  .loading {
    height: 70vh;
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
    min-height: 100%;
    border: 2px solid #cccccc60;
    border-radius: 5px;
  }


  .section-content-last-users table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
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

  .actions-users {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .actions-users i {
    font-size: 1.8rem;
    color: #51504F;
    cursor: pointer;
    transition: .2s ease-in-out;
  }

  .actions-users i:hover {
    opacity: .8;
  }

  .active {
    background-color: #4ad09e;
    border-radius: 3px;
    color: #fff;
    letter-spacing: .2px;
    font-size: 1.2rem;
    padding: 5px 10px;
    font-weight: 600;
  }

  .inative {
    background-color: var(--color-red);
    border-radius: 3px;
    color: #fff;
    letter-spacing: .2px;
    font-size: 1.2rem;
    padding: 5px 10px;
    font-weight: 600;
  }

  .content-card-modal {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 3rem;
    padding: 2vh 2vw;
  }

  .form-card {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .card-form {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card-form label {
    font-size: 2rem;
    color: #51504F;
  }

  .card-form input[type=text] {
    border: 2px solid #cccccc70;
    outline: none;
    padding: 5px 10px;
    height: 5vh;
  }

  .bi-represent {
    width: 70%;
    height: 100%;
  }

  .bi-represent h6 {
    font-size: 3rem;
    text-align: center;
    color: #51504F;
  }

  .iframe-represent {
    width: 100%;
    height: 90%;
  }

  .btn-new {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2vh 1vw;
  }

  .btn-new button {
    background-color: #0F297D;
    border: none;
    padding: 5px 20px;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: .2px;
    border-radius: 3px;
    cursor: pointer;
    transition: .2s ease-in-out;
  }

  .btn-new button:hover {
    opacity: .9;
  }

  .new-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10vh;
  }

  .new-item h6 {
    font-size: 2rem;
    color: #51504F;
    letter-spacing: .2px;
  }

  .form-new-item {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .form-new-item label {
    font-size: 1.2rem;
    color: #51504F;
    font-weight: 600;
  }

</style>