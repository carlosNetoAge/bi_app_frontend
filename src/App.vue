<template>
  <router-view/>
</template>


<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  *,
  ::before,
  ::after{
    padding: 0;
    margin: 0;
    font-family: 'Open Sans';
    text-decoration: none !important;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    list-style: none;
    box-sizing: border-box;
    overflow: hidden;
  }

  :root {
    --color-background: #F5F6FA;
    --color-red: #EC344E;
    --color-black: #2B2B2B;
    --color-grey: #F4F4F6;
    --color-text-light: #555;
  }

  /*
      CONFIGURAÇÃO BÁSICA
   */

  html {
    font-size: 62.5% !important;
    overflow: hidden;
    background-color: var(--color-background);
  }

  body {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  /*
      Super Classes
   */

  .modal {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #33333380;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-modal {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    animation: plus-modal forwards .2s;
  }

  @keyframes plus-modal {
    from {
      transform: scale(0.8);
      opacity: .8;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .header-card-modal {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .c-loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #fa860d;
    height: 50px;
    width: 50px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-submit {
    width: 100%;
    background-color: #fff;
    color: #FA8A0C;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid #FA8A0C;
    padding: 10px;
    transition: ease-in-out .3s;
  }
  .btn-submit:hover {
    background-color: #FA8A0C;
    color: #fff;
  }

.trigger {
  text-align: center;
  padding: 2vh 0;
  background-color: #F2DEDE;
  color: #A94442;
  letter-spacing: .3px;
  font-weight: 600;
  font-size: 1.4rem;
}

  /*   SCROLL BAR   */
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
    width: 2px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }


  /*   PLACEHOLDER   */
  ::-webkit-input-placeholder {
    color: #33333370;
    font-weight: 600;
    font-size: 1.4rem;
  }

  /*
      Web
   */

  /*
      App
   */

  .app-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    gap: 1rem;
    font-family: "Open Sans";
  }

  .content-container {
    width: 78vw;
    height: 100%;
    padding: 3vh 1vw;
  }

  h1 {
    font-size: 2.4rem;
    color: #646464;
    font-weight: 500;
    padding: 1vh 0;
  }


</style>
