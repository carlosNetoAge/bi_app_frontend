<template>
  <div id="menu">
    <div id="logo-menu">
      <img src="/img/company/age.png" alt="">
    </div>
    <div class="items-menu">
      <div class="item-menu">
        <nav>
          <ul class="href-menu" :class="{ animation_right : back === true }" v-if="step === 0">
            <span>Setores</span>
            <li v-for="item in menuItems" @click="subMenu(item.item_id)">
                <div></div>
                <div>
                  <i class="fi fi-rr-dashboard"></i>
                </div>
                <span>{{ item.menu_items.item }}</span>
            </li>
          </ul>
          <ul class="href-menu" :class="{ animation_left : back === false }" v-if="step === 1">
              <i class="fi fi-rr-arrow-small-left" @click="backMenu()"></i>
              <span>Dashboards disponíveis</span>
              <li v-for="sub in subMenuItems" @click="pageTrade(sub.sub_items.iframe, sub.sub_items.subitem)">
                <div></div>
                <div>
                  <i class="fi fi-rr-dashboard"></i>
                </div>
                <span>{{ sub.sub_items.subitem }}</span>
              </li>
          </ul>
        </nav>
        <nav v-if="step === 0">
          <ul class="href-menu" :class="{ animation_right : back === true } ">
            <span>Ações</span>
            <router-link to="/gerenciamento" v-if="privilege === '1'">
              <li>
                <div></div>
                <div>
                  <i class="fi fi-rr-settings-sliders"></i>
                </div>
                <span>Gerenciamento</span>
              </li>
            </router-link>
            <li @click="logout()">
              <div></div>
              <div>
                <i class="fi fi-rr-sign-out-alt"></i>
              </div>
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Menu",
  data() {
    return {
      isActive: true,
      step: 0,
      menuItems: null,
      subMenuItems: null,
      back: null,
      privilege: $cookies.get('privilegio')
    }
  },
  methods: {
    getMenuItems: function () {
      axios({
        method: "GET",
        url: "/allowed/list_menu",
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
          "user-id": $cookies.get('user_id')
        }
      })
          .then((res) => {

            this.menuItems = res.data
            console.log(res.data)

          })
          .catch((error) => {

          })
    },
    subMenu: function (id) {
      axios({
        method: "GET",
        url: "/allowed/list_submenu",
        headers: {
          "Content-Type": "application/json",
          "authorization": $cookies.get('token'),
          "user-id": $cookies.get('user_id'),
          "item-id": id
        }
      })
          .then((res) => {

            this.step = 1
            this.back = false

            this.subMenuItems = res.data

          })
          .catch((error) => {

          })
    },
    pageTrade: function (iframe, subitem) {
      this.$emit('page-item',
          { data: {
              iframe,
              subitem
            } })
    },
    backMenu: function () {
      this.step = 0
      this.back = true
    },
    logout: function () {
      $cookies.remove('user_id')
      $cookies.remove('privelegio')
      $cookies.remove('token')
      $cookies.remove('email')

      this.$router.replace("/")

    }
  },
  mounted() {
    this.getMenuItems()
  }
}
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    font-family: "Open Sans";
  }

  #menu {
    width: 17vw;
    height: 100vh;
    background-color: #fff;
    border-right: 2px solid #cccccc90;
  }

  #logo-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #cccccc20;
    padding: 2vh 0;
  }

  #logo-menu img {
    width: 6vw;
    height: auto;
  }

  .items-menu  {
    width: 100%;
    height: 80%;
  }

  .item-menu ul {
    margin-top: 1vh;
    padding: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    list-style: none;
  }

  .item-menu ul i {
    font-size: 3rem;
    color: #333;
    cursor: pointer;
    transition: .2s ease-in-out;
  }

  .item-menu ul i:hover {
    opacity: .4;
  }

  .item-menu ul span {
    padding: 0 2vw;
    margin: 1vh 0;
    color: #777;
    font-weight: 600;
    letter-spacing: .2px;
    font-size: 1.2rem;
  }

  .href-menu li {
    text-decoration: none;
    padding: 6px 0 6px 12px;
    display: block;
    font-weight: 500;
    color: #3C3B40;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: .3s ease-in-out;
    border-radius: 5px 0px 0px 5px;
    cursor: pointer;
  }

  .href-menu li i {
    font-size: 2rem;
    transition: .3s ease-in-out;
  }

  .href-menu li span {
    font-size: 1.5rem;
    padding: 0;
    transition: .3s ease-in-out;
  }

  .href-menu li:hover {
    background-color: #F5F6FA;
  }

  .href-menu li:hover > div i {
    color: #fa860d;
  }

  .href-menu li:hover > span {
    color: #0f297d;
  }

  .href-menu li:hover > div:nth-child(2) {
    background-color: #eff0f2;
  }

  .href-menu div:nth-child(1) {
    width: 5px;
    height: 4vh;
    margin-right: 5px;
    border-radius: 2px;
  }

  .href-menu div:nth-child(2) {
    background-color: #F5F6FA;
    padding: 10px 10px 5px 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ease-in-out .3s;
  }

  .router-link-active {
    background-color: #F5F6FA;
  }

  .router-link-active div:nth-child(1) {
    width: 5px;
    height: 4vh;
    background-color: #fa860d;
    margin-right: 5px;
    border-radius: 2px;
  }

  .router-link-active div:nth-child(2) {
    background-color: #eff0f2;
  }

  .router-link-active i,
  .router-link-active span {
    font-weight: 600;
  }

  .router-link-active i {
    color: #0f297d;
  }

  .router-link-active span {
    color: #0f297d;
  }

  .animation_left {
    animation: left .3s forwards;
  }

  @keyframes left {
    from {
      opacity: .4;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animation_right {
    animation: right .3s forwards;
  }

  @keyframes right {
    from {
      opacity: .4;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

</style>