<template lang='pug'>
	main.main
		.main-wrap
			<categories-nav></categories-nav>
		
</template>
<script>
import Categories from './Categories.vue'

export default{
	data: function(){
		return {

		}
	},
	components: {
		'categories-nav': Categories
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