import Main from './components/Main.vue'
import ProductDetail from './components/ProductDetail.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export const routes = [
	{path: '', component: Main},
	{path: '/about', component: About},
	{path: '/contact', component: Contact},
];