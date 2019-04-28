import Products from './Products';
import ProductRegister from './ProductRegister';
import ProductEdit from './ProductEdit';
const route = [
  {
    path: '/',
    component: Products
  },
  {
    path: '/produtos/cadastro',
    component: ProductRegister
  },
  {
    path: '/produtos/editar/:id',
    component: ProductEdit
  }
];
export default route;
