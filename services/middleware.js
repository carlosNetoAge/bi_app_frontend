export default {
    // Impedir acesso ao app sem autenticação
    auth(to, from, next) {
        const token = $cookies.get('token')

        if(!token){
            next('/')
            return
        }

        next()
        return
    },

    authAdmin(to, from, next) {
        const privilege = $cookies.get('privilegio')

        if(privilege === "0"){
            next('/age')
            return
        }

        next()
        return
    },

    // Impedir retorno para página de login com token ativo
    login (to, from, next) {
        const token = $cookies.get('token')

        if(token) {
            next('/age')
            return
        }

        next()
        return

    }
}