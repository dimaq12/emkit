import Main from './components/Main.vue'
import ProductDetail from './components/ProductDetail.vue'
import Product from './components/Product.vue'
import Products from './components/Products.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export const routes = [
	{path: '', component: Main},
	{path: '/about', component: About},
	{path: '/contact', component: Contact},
	{path: '/products', component: Product, children: [
		{path: '', component: Products},
		{path: ':id', component: ProductDetail}
	]}
];