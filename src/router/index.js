import { createRouter, createWebHistory } from 'vue-router';
import Update from '../views/Update.vue';
import Create_confirm from '../views/Create_confirm.vue';
import Users from '../views/Users.vue';
import HomeView from '../views/HomeView.vue';
import Create from '../views/Create.vue';
import Delete from '../views/Delete.vue';
import Update_confirm from '../views/Update_confirm.vue';



const routes = [
  
  {
    path: '/update_confirm',
    name: 'update_confirm',
    component: Update_confirm
  }
  ,
  {
    path: '/delete',
    name: 'delete',
    component: Delete
  }
  ,
  {
    path: '/update',
    name: 'update',
    component: Update
  }
  ,
{
  path:'/',
  name:'homeView',
  component:HomeView
},
  {
    path: '/users',
    name: 'users',
    component: Users
  }
  ,
  {
    path: '/create_confirm',
    name: 'create_confirm',
    component: Create_confirm
  }
  ,
  {
    path: '/create',
    name: 'create',
    component: Create
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;