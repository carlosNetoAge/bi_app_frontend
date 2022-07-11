<template>
  <div id="menu">
    <div id="logo-menu">
      <img src="/img/company/age_logo.png" alt="">
    </div>
    <div class="items-menu">
      <div class="item-menu">
        <nav>
          <ul class="href-menu">
            <li>
              <router-link to="/" active-class="router-link-active">
                <div>
                  <i class="fi fi-rr-home"></i>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/formularios" active-class="router-link-active">
                <div>
                  <i class="fi fi-rr-form"></i>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/planilhas" active-class="router-link-active">
                <div>
                  <i class="fi fi-rr-address-book"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    font-family: "Open Sans";
  }

  #menu {
    width: 5vw;
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
    width: 2vw;
    height: auto;
  }

  .items-menu  {
    width: 100%;
    height: 80%;
  }

  .item-menu ul {
    margin-top: 1vh;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    list-style: none;
  }

  .href-menu a {
    text-decoration: none;
    padding: 6px 0 6px 10px;
    display: block;
    font-weight: 500;
    color: #3C3B40;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: .3s ease-in-out;
    border-radius: 5px 0px 0px 5px;
  }

  .href-menu a i {
    font-size: 2rem;
    transition: .3s ease-in-out;
  }

  .href-menu a span {
    font-size: 1.5rem;
    padding: 0;
    transition: .3s ease-in-out;
  }

  .href-menu a:hover {
    background-color: #F5F6FA;
  }

  .href-menu a:hover > div i {
    color: #fa860d;
  }

  .href-menu a:hover > span {
    color: #0f297d;
  }

  .href-menu a:hover > div:nth-child(1) {
    background-color: #eff0f2;
  }

  .href-menu div:nth-child(1) {
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


</style>