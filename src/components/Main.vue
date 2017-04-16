<template lang='pug'>
	main.main
		.main-wrap
			<categories-nav></categories-nav>
			<product></product>
		
</template>
<script>
import Categories from './Categories.vue'
import Product from './Product.vue'

export default{
	data: function(){
		return {

		}
	},
	components: {
		'categories-nav': Categories,
		'product': Product
	}
}
</script>
<style>
.main{
	height: 100vh;
}
.main-wrap{
	max-width: 1200px;
	margin: auto;
	height: 100%;
}
	
</style>