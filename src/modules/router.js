import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
	routes,
	history: createWebHistory()
})

export default app => app.use(router)
