export default defineNuxtRouteMiddleware((to, from) => {
    // Проверяем, выполняется ли код на клиенте
    if (process.client) {
        const isAuthenticated = localStorage.getItem('authenticated') === 'true';

        if (!isAuthenticated && to.path !== '/auth') {
            return navigateTo('/auth');
        }
    }
});
