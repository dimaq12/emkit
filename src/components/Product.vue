<template lang='pug'>
	.products-wrap
		.product(v-for='product in products')
			<h4>{{ product.name }}</h4>
		
</template>
<script>

export default{
	data: function(){
		return {
			products: [
			{
					'name': 'Adapter1 ',
					'title': 'Adapter1'
			},
			{
					'name': 'Adapter2 ',
					'title': 'Adapter2'
			},
			{
					'name': 'Adapter3 ',
					'title': 'Adapter3'
			},
			{
					'name': 'Adapter4 ',
					'title': 'Adapter4'
			},
			{
					'name': 'Adapter5 ',
					'title': 'Adapter5'
			},
			{
					'name': 'Adapter6 ',
					'title': 'Adapter6'
			},
			{
					'name': 'Adapter7 ',
					'title': 'Adapter7'
			},
			{
					'name': 'Adapter8 ',
					'title': 'Adapter8'
			}
			]
		
		}
	}
}
</script>

<style lang='scss'>

.products-wrap{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 20px;
}
.product{
	width: 23.45%;
	height: 400px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
	background: #BBC1D7;
	margin-bottom: 40px;
}

</style>