import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue'


const routes = [
    { path: '/', 
      component: Home
    },
    // { path: '/login', 
    //   component: Event
    // },

  
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 