<template>
  <div id="menu">
    <div class="card-menu">
      <div class="header-card">
        <i class="fi fi-rr-settings"></i>
        <span>Gerenciamento</span>
      </div>
      <div class="main-card">
        <nav>
          <ul>
            <router-link to="/gerenciamento" active-class="activeClass">
              <li>
                <div>
                  <i class="fi fi-rr-eye"></i>
                  <span>Visão geral</span>
                </div>
              </li>
            </router-link>
            <router-link to="/gerenciamento/usuarios" active-class="activeClass">
              <li>
                <div>
                  <i class="fi fi-rr-users-alt"></i>
                  <span>Usuários</span>
                </div>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div>
                  <i class="fi fi-rr-chart-pie-alt"></i>
                  <span>Dashboards</span>
                </div>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div>
                  <i class="fi fi-rr-search-alt"></i>
                  <span>Relatórios</span>
                </div>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div>
                  <i class="fi fi-rr-pulse"></i>
                  <span>Log de acesso</span>
                </div>
              </li>
            </router-link>
            <router-link to="/age">
              <li>
                <div>
                  <i class="fi fi-rr-arrow-alt-square-left"></i>
                  <span>Retornar ao menu</span>
                </div>
              </li>
            </router-link>
          </ul>
        </nav>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

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
  }

  .main-card nav ul a li div {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .main-card nav ul a li div i {
    font-size: 1.8rem;
    transition: .2s ease-in-out;
    color: #51504F;
  }

  .main-card nav ul a li:hover > div i {
    color: #fa860d !important;
  }

  .main-card nav ul a li span {
    padding: 0 0 .5vh 0;
    transition: .2s ease-in-out;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: .2px;
    color: #51504F;
  }

  .main-card nav ul a li:hover > div span {
    color: #0f297d;
  }

  .main-card li:hover {
    background-color: #cccccc20;
  }

  .activeClass {
    background-color: #F5F6FA;
    display: block;
  }

  .activeClass li i {
    color: #fa860d !important;
  }

  .activeClass li span {
    color: #0f297d !important;
  }


</style>