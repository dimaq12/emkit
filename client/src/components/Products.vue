<template lang='pug'>
	.products-wrap
		.product(v-for='product in products')
			<h4>{{ product.title }}</h4>
			.img-wrap
				<img v-bind:src='product.image'>
			<span>{{product.description}}</span>
			.details
				<a href="">details</a>
		<router-view></router-view>
</template>
<script>

export default{
	data: function(){
		return {
			products: this.$http.get('products/?format=json')
				.then(response => {
					console.log(response)
					return response.json()
				}, error => {
					console.log(error);
				})
				.then(data => {
					console.log(data);
					const resArray = [];
					for (let key in data){
						resArray.push(data[key]);
					}
					this.products = resArray;
				}) 
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
	width: 24%;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
	background: #ffffff;
	margin-bottom: 20px;
	transform: translateY(0px);
	transition: 0.3s all ease-in-out;
	&:hover{
		transform: translateY(-10px);
		box-shadow: 0 12px 16px rgba(0,0,0,0.05);
		h4{
			color: #73ca46;
		}
		.img-wrap{
			img{
				filter: grayscale(0%);
			}
		}
	}
	h4{
		text-transform: uppercase;
		color: grey;
		text-align: center;
		transition: 0.3s all ease-in-out;
	}
	span {
		display: block;
		width: 100%;
		padding: 5%;
		font-style: italic;
		text-align: center;
		box-sizing: border-box;
	}
	.img-wrap{
		img{
			display: block;
			width: 100%;
			height: auto;
			filter: grayscale(70%);
			transition: 0.3s all ease-in-out;
		}
	}
	.details{
		transition: 0.3s all ease-in-out;
		a{
			width: 100%;
			display: block;
			padding: 20px 0;
			text-decoration: none;
			text-transform: uppercase;
			font-size: 1.3em;
			font-weight: bold;
			text-align: center;
			transition: 0.3s all ease-in-out;
		}
		&:hover{
			background: #73ca46;
			a{
				color: #fff;
			}
		}
	}
}

</style>