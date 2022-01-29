import { createWebHistory, createRouter } from "vue-router";
import App from './components/App.vue'
import Menual from './components/Menual.vue'

const routes = [
    { path: '/', 
      component: App
    },
    { path: '/menual', 
      component: Menual
    },
    {
      path : '/:pathMatch(.*)',
      component : App
    },
  
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 