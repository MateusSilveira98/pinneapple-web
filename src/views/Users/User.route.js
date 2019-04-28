import Login from './Login';
import UserRegister from './UserRegister';
import UserEdit from './UserEdit';
const route = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/usuarios/cadastro',
    component: UserRegister
  },
  {
    path: '/usuarios/editar',
    component: UserEdit
  }
];
export default route
