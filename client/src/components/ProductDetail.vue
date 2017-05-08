<template lang='pug'>
	div
		.title {{ product.title }}
		<img v-bind:src='product.image'>
		.productID {{ product.description }}
		
</template>
<script>

export default{
	data(){
		return {
			product: this.$http.get('products/' + this.$route.params.id + '/?format=json')
				.then(response => {
					return response.json()
				}, error => {
					console.log(error);
				})
				.then(data => {
					console.log(data);
					this.product = data;
				}) 
		}
	}
}
</script>