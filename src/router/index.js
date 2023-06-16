import { createRouter, createWebHistory } from 'vue-router';
import Update from '../components/Update.vue';
import Create_confirm from '../components/Create_confirm.vue';
import Users from '../components/Users.vue';
import HomeView from '../views/HomeView.vue';
import Create from '../components/Create.vue';
import Delete from '../components/Delete.vue';
import Update_confirm from '../components/Update_confirm.vue';


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