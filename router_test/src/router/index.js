import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ContactsPage from '@/components/ContactsPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/contacts/:id?', component: ContactsPage, name: 'contacts' },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
export default router
