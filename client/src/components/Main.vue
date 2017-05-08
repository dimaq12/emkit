<template lang='pug'>
	<div>
		.top-items
			<categories-nav></categories-nav>
			<gallery></gallery>
		<product></product>
	</div>
</template>
<script>
import Categories from './Categories.vue'
import Product from './Product.vue'
import MainGallery from './MainGallery.vue'

export default{
	data: function(){
		return {

		}
	},
	components: {
		'categories-nav': Categories,
		'product': Product,
		'gallery': MainGallery
	}
}
</script>
<style>

.top-items{
	display: flex;
	justify-content: space-between;
	width: 100%;
}
	
</style>