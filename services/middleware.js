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