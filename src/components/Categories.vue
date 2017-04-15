<template lang='pug'>
	.vertical-menu
		ul.categories-list
			.categories-heading
				span Categories
			li.category-item(v-for='(category, index) in categories') 
				a {{category}}
		

</template>
<script>
export default{
	data: function(){
		return {
			'categories': ['Adapter Boards SO', 'Adapter Boards SSOP', 'Adapters for BreadBoard']
		}
	}
}
</script>
<style lang='scss'>
$green: #73ca46;

.vertical-menu{
	width: 25%;
}
.categories-list{
	list-style: none;
	margin: 0;
	padding: 0;
	li{
		line-height: 2.5em;
		padding: 0 20px;
		background: #fff;
		font-size: 18px;
		font-family: Lato, sans-serif;
		&:hover{
			background-color: $green;
			cursor: pointer;
		}
		&:hover>a{
			color: #fff;
		}
		a{
			position: relative;
			display: block;
			color: #337ab7;
    	text-decoration: none;
    	&:before{
    		display: inline-block;
    		font-family: FontAwesome;
    		font-style: normal;
    		font-weight: normal;
    		line-height: 1;
    		content: "\f105";
    		position: absolute;
    		top: 50%;
    		transform: translateY(-50%);
    		right: 8px;
    	}
		}
	}
}
.categories-heading{
	background-color: #73ca46;
	line-height: 50px;
	border-bottom: 3px solid #fff;
	padding:0 20px;
	span{
		color: white;
		font-family: 'Lato', sans-serif;
		font-weight: bold;
		text-transform: uppercase;
	}
}
	
</style>