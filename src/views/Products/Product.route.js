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
    path: '/produto/cadastro',
    component: ProductRegister
  },
  {
    path: '/produto/editar/:id',
    component: ProductEdit
  },
  {
    path: '/produto/:id',
    component: ProductDetails
  },
]
export default route
