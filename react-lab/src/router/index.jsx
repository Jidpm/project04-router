
import { createBrowserRouter } from 'react-router'
import HomePage from '../page/HomePage'
import About from '../page/About'
import Products from '../page/Products'
import Layout from '../components/Layout'
import { fetchProducts } from '../api/products'

export const router = createBrowserRouter([

  {path: '/', element: <Layout/>, 
    children:[
    {index: true, element: <HomePage/>},
    {path: 'about', element: <About/>},
    {path: 'Products', element: <Products/>, loader: fetchProducts}

  ]},
],
{
  basename:'project04-router'
}
)

export default router