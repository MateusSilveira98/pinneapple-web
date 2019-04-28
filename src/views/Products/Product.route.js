import Products from './Products'
import ProductRegister from './ProductRegister'
import ProductEdit from './ProductEdit'
import ProductDetails from './ProductDetails'
let route = [
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
  },
  {
    path: '/produtos/:id',
    component: ProductDetails
  },
]
export default route
