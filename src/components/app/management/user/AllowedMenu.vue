<template>
  <div id="allowed-items" v-if="loading === false && step === 1">
      <div class="menu-allowed">
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Menu</th>
            <th style="text-align: center">Status</th>
            <th>Ações</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="menu in data">
            <td>{{ menu.id }}</td>
            <td>{{ menu.item }}</td>
            <td style="text-align: center">
              <template v-if="menu.menu_allowed.length">
                <span :class="{active: menu.menu_allowed.length, inative}"> Acessível </span>
              </template>
              <template v-else>
                <span :class="{inative: !menu.menu_allowed.length}"> Inacessível </span>
              </template>
            </td>
            <td class="actions-table">
                <template v-if="menu.menu_allowed.length">
                  <i class="fi fi-rr-cross-small" style="color: var(--color-red); font-size: 2.6rem" @click="alterAccess(menu.id, 'inative')"></i>
                </template>
                <template v-else>
                  <i class="fi fi-rr-check" style="color: #4AD09E" @click="alterAccess(menu.id, 'active')"></i>
                </template>
              <i class="fi fi-rr-redo" @click="tradeMenu(menu.id, 2)"></i>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>
  <div id="allowed-items" v-if="loading === false && step === 2">

  </div>
  <Loading
      v-if="loading === true"
  />
</template>

<script>

import Loading from "@/components/Loading";
import axios from "axios";

export default {
  name: "AllowedMenu",
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  components: {
    Loading
  },
  data () {
    return {
      loading: true,
      data: {},
      step: 1,
      menu: {
        id: 0,
        menu: {},
        submenu: {}
      },
      permission: {},
      msg: ''
    }
  },
  methods: {
    getMenus: function () {

      axios({
        method: "GET",
        url: "http://localhost:8000/api/allowed/menu_general",
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
          "user_id": this.id
        }
      })
          .then((res) => {

            this.data = res.data
            this.loading = false

          })
          .catch((error) => {

          })

    },
    tradeMenu: function (id, step) {
      this.step = step
      this.menu.id = id

      this.getMenu(this.menu.id)
    },
    getMenu: function (id) {

      axios({
        method: "GET",
        url: "http://localhost:8000/api/allowed/menu_general"+id,
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
          "user_id": this.id
        }
      })
          .then((res) => {

            this.menu.menu = res.data

            this.getSubMenus(this.menu.menu.id)

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
          "user_id": this.id
        }
      })
          .then((res) => {

            this.menu.submenu = res.data

          })
          .catch((error) => {

          })

    },
    alterAccess: function (id, action) {

      if(action === 'active') {

            axios({
              method: "GET",
              url: "http://localhost:8000/api/menu-permissions/create",
              headers: {
                "Content-Type": "application/json",
                "authorization": $cookies.get('token'),
                "user_id": this.id,
                "item_id": id
              }
            })
                .then((res) => {

                  this.permission = res.data
                  console.log(res.data)

                  if(this.permission.status === true) {

                    this.msg = this.permission.msg

                    this.loading = true
                    this.getMenus()

                  }

                })
                .catch((error) => {

                })


      }

      if(action === 'inative'){

        axios({
          method: "DELETE",
          url: "http://localhost:8000/api/menu-permissions/"+id,
          headers: {
            "Content-Type": "application/json",
            "authorization": $cookies.get('token'),
            "user_id": this.id,
          }
        })
            .then((res) => {

              this.permission = res.data

              if(this.permission.status === true) {

                this.msg = this.permission.msg

                this.loading = true
                this.getMenus()

              }

            })
            .catch((error) => {

            })

      }

    }
  },
  created() {
    this.getMenus(this.id)
  }
}
</script>

<style scoped>

 .loading {
   width: 100%;
   height: 100%;
 }

 #allowed-items {
   width: 100%;
   height: 60vh;
   display: flex;
   gap: 5em;
 }

 .menu-allowed {
   width: 100%;
   height: 100%;
 }

 .menu-allowed table {
   width: 100%;
   text-align: left;
   border-collapse: collapse;
 }

 .menu-allowed table thead tr th:nth-child(1) {
   width: 10%;
 }

 .menu-allowed table thead tr th:nth-child(2) {
   width: 15%;
 }

 .menu-allowed table thead tr th:nth-child(3) {
   width: 25%;
   text-align: center;
   padding: 0;
 }

 .menu-allowed table thead tr th:nth-child(4) {
   width: 25%;
   text-align: center;
 }

 .menu-allowed table tbody tr td:nth-child(1) {
   width: 10%;
 }

 .menu-allowed table tbody tr td:nth-child(2) {
   width: 15%;
 }

 .menu-allowed table tbody tr td:nth-child(3) {
   width: 25%;
   text-align: center;
   padding: 0;
 }

 .menu-allowed table thead tr {
   background-color: #CCCBCA20;
   border-bottom: 2px solid #cccccc40;
   font-size: 1.4rem;
   font-weight: 500;
   letter-spacing: .2px;
   text-align: left;
   height: 5vh;
 }

 .menu-allowed table thead tr th {
   padding: 0 1vw;
 }

 .menu-allowed table tbody tr {
   font-size: 1.4rem;
   font-weight: 500;
   letter-spacing: .2px;
   border-bottom: 1px solid #cccccc60;
 }

 .menu-allowed table tbody tr td {
   padding: 0 0 0 1vw;
   height: 6vh;
 }

 .menu-allowed table tbody tr:nth-child(even) {
   background-color: #cccccc30;
 }

 .menu-allowed table tbody tr:nth-child(odd) {
   background-color: #fff;
 }

 #alert-nodata {
   width: 100%;
   background-color: #fff;
   border-radius: 3px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.6rem;
   padding: 2vh 1vw;
   color: #51504F;
   font-weight: 600;
   letter-spacing: .2px;
   border: 1px solid #cccccc80;
 }

 .actions-table {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
 }

 .actions-table i {
   font-size: 1.8rem;
   cursor: pointer;
   transition: .2s ease-in-out;
 }

 .actions-table i:hover {
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

</style>