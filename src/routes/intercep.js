function routerIntercep(router) {
    router.beforeEach((to, from, next) => {
        // console.log(to);
        // console.log(from)
        next()
    })
}




export default routerIntercep