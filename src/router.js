import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue'
import login from './components/Login.vue'



const routes = [
    { path: '/', 
      component: Home
    },
    { path: '/login', 
    component: login
    },
  
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 