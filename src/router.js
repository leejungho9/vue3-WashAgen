import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue'
import Menual from './components/Menual.vue'
import Service from './components/Service.vue'
import Event from './components/Event.vue'
import login from './components/Login.vue'
import EventDetail from './components/EventDetail.vue'



const routes = [
    { path: '/', 
      component: Home,
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
      name : Service,
      props: true
    },
    { path: '/Event', 
      component: Event,
      name : Event,
      props: true
    },
    { path: '/EventDetail/:id', 
      component: EventDetail,

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