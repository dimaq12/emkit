<template lang='pug'>
	<div>
		.top-items
			<categories-nav></categories-nav>
			<gallery></gallery>
		<products></products>
	</div>
</template>
<script>
import Categories from './Categories.vue'
import Products from './Products.vue'
import MainGallery from './MainGallery.vue'

export default{
	data: function(){
		return {

		}
	},
	components: {
		'categories-nav': Categories,
		'products': Products,
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