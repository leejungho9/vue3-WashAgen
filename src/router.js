import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue'
import Menual from './components/Menual.vue'
import Service from './components/Service.vue'
import Event from './components/Event.vue'
import login from './components/Login.vue'



const routes = [
    { path: '/', 
      component: Home,
      params: true,
      name : Home,
      props: true
    },
    { path: '/Menual', 
      component: Menual,
      name : Menual,
      props: true

    },
    { path: '/Service', 
      component: Service,
      query: false,
      name : Service,
      props: true
    },
    { path: '/Event', 
      component: Event,
      query: false,
      name : Event,
      props: true
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