<template>
  <div class="app-container">
    <div class="card-content">
      <div class="menu-card">
        <Menu/>
      </div>
      <div class="content-card">
        <div class="section-content-last-users">
          <div class="header-section" style="background-color: #F5F6FA; padding: 2vh 2vw; border-bottom: 2px solid #cccccc60">
            <span style="color: #51504F; padding: 0; ">Todos os usuários</span>
          </div>
          <div style="overflow-y: auto; max-height: 75vh">
            <table v-if="loading === false">
              <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="user in users">
                <td>{{ user.id }}</td>
                <td>{{ user.nome }} {{ user.sobrenome }}</td>
                <td>{{ user.email }}</td>
                <td class="actions-users">
                  <i class="fi fi-rr-edit" @click="pageUser(user.id, 1)"></i>
                  <template v-if="user.ativo === 1">
                    <i class="fi fi-rr-ban" @click="modalActions(1, 'delete', user.id)"></i>
                  </template>
                  <template v-else>
                    <i class="fi fi-rr-checkbox" @click="modalActions(1, 'restore', user.id)"></i>
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
    <div class="modal" v-if="modal === true">
      <div class="card-modal" v-if="action.step === 1">
          <div class="btn-close">
            <i class="fi fi-sr-cross-small" @click="modalActions(0)"></i>
          </div>
          <div class="header-card-modal">
            <i class="fi fi-sr-check" style="color: #4AD09E"></i>
            <span><b>Atenção!</b> <br> Essa ação irá desbloquear o usuário.</span>
          </div>
          <div style="width: 100%; padding: 0 4vw">
            <div class="btn-submit sucess" style="border-color: #4AD09E; color: #4AD09E;" @click="updateUser('restore', action.id)">
              <i class="fi fi-sr-check"></i>
              <span>Desbloquear o usuário</span>
            </div>
          </div>
      </div>
      <div class="card-modal" v-if="action.step === 2">
        <div class="btn-close">
          <i class="fi fi-sr-cross-small" @click="modalActions(0)"></i>
        </div>
        <div class="header-card-modal">
          <i class="fi fi-sr-engine-warning"></i>
          <span><b>Atenção!</b> <br> Essa ação irá bloquear o usuário.</span>
        </div>
        <div style="width: 100%; padding: 0 4vw">
          <div class="btn-submit" @click="updateUser('delete', action.id)">
            <i class="fi fi-rr-ban"></i>
            <span>Bloquear o usuário</span>
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
  name: "Users",
  components: {
    Menu,
    Loading,
    User
  },
  data() {
    return {
      loading: true,
      users: {},
      modal: false,
      action: {
        step: 0,
        id: 0
      },
      user: {
        status: false,
        id: 0
      }
    }
  },
  methods: {
    getUsers: function () {

      this.loading = true

      axios({
        method: "GET",
        url: "http://localhost:8000/api/users",
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
        }
      })
          .then((res) => {

            this.loading = false
            this.users = res.data

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
    modalActions: function (step, action, id) {

      if(step === 0) {
        this.modal = false
        this.action.step = 0
        this.action.id = 0
      }

      if(action === 'restore') {
        this.modal = true
        this.action.step = 1
        this.action.id = id
      }

      if(action === 'delete') {
        this.modal = true
        this.action.step = 2
        this.action.id = id
      }



    },
    updateUser: function (action, id) {
        if (action === 'delete') {

          axios({
            method: "DELETE",
            url: "http://localhost:8000/api/users/"+id,
            headers: {
              "Content-Type": "application/json",
              "authorization": $cookies.get('token'),
            }
          })
              .then((res) => {

                this.data = res.data

                if(this.data.status === true) {
                  this.getUsers()
                  this.modalActions(0)
                }

              })
              .catch((error) => {

              })

        }

      if (action === 'restore') {

        axios({
          method: "PUT",
          url: "http://localhost:8000/api/users/restore/"+id,
          headers: {
            "Content-Type": "application/json",
            "authorization": $cookies.get('token'),
          }
        })
            .then((res) => {

              this.data = res.data

              if(this.data.status === true) {
                this.getUsers()
                this.modalActions(0)
              }

            })
            .catch((error) => {

            })

      }
    },


  },
  created() {
  },
  mounted() {
    this.getUsers()
  }

}
</script>

<style scoped>


.btn-submit {
  border: 2px solid var(--color-red);
  color: var(--color-red);
  display: flex;
  align-items: center;
  gap: .2rem;
  justify-content: center;
}

.btn-submit i {
  font-size: 1.5rem;
}

.btn-submit:hover {
  background-color: var(--color-red);
  color: #fff;
}

.sucess:hover {
  background-color: #4AD09E;
  color: #fff !important;
}

.card-modal {
  width: 30vw;
  padding: 1vh 1vw 8vh 1vw;
  text-align: center;
}

.header-card-modal {
  padding: 2vh 0 5vh 0;
}

.header-card-modal i {
  font-size: 7rem;
  color: var(--color-red);
}

.header-card-modal b {
  font-size: 2rem;
}

.header-card-modal span {
  font-size: 1.6rem;
  font-weight: 600;
  color: #51504F;
  letter-spacing: .2px;
}

.loading {
  height: 67vh;
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

.section-content-last-users {
  background-color: #fff;
  min-height: 100%;
  max-height: 100%;
  border: 2px solid #cccccc60;
  border-radius: 5px;
}

.section-content-last-users div {
  padding: 10px;
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
}

.section-content-last-users table tbody tr:nth-child(odd) {
  background-color: #fff;
  transition: .2s ease-in-out;
}

.section-content-last-users table tbody tr:nth-child(even) {
  background-color: #cccccc30;
  transition: .2s ease-in-out;

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
  transition: .2 ease-in-out;
}

.actions-users i:hover {
  opacity: .8;
}


</style>