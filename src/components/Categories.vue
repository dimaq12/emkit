<template lang='pug'>
	.vertical-menu
		ul.categories-list
			.categories-heading
				span Categories
			li.category-item(v-for='category in categories') 
				a {{ category.name }}
				ul.sub-menu(v-if='category.subcategories')
					li.category-item(v-for='subcat in category.subcategories')
						a {{ subcat }}
		

</template>
<script>

export default{
	data: function(){
		return {
			categories: [
			{
					'name': 'Adapter Boards SO',
					'subcategories': ['Sub1', 'Sub2']
			},
			{
					'name': 'Adapter Boards SSOP',
					'subcategories': ['SSOP1', 'SSOP2']
			},
			{
					'name': 'Adapters for BreadBoard',
					'subcategories': []
			},
			{
					'name': 'QFN Adapters',
					'subcategories': []
			},
			{
					'name': 'QFP Adapters',
					'subcategories': []
			},
			{
					'name': 'SOT23 Adapter Boards',
					'subcategories': []
			}
			]
		}
	}
}
</script>
<style lang='scss'>
$green: #73ca46;

.vertical-menu{
	width: 24%;
	display: inline-block;
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
		position: relative;
		&:hover{
			background-color: $green;
			cursor: pointer;
		}
		&:hover .sub-menu{
			opacity: 1;
			visibility: visible;
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
.sub-menu{
	position: absolute;
	min-width: 200px;
	top: 0;
	left: 100%;
	background: #fff;
	border: 1px solid #eaeaea;
	border-radius: 0;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0);
	margin: 0;
	transition: all .45s ease-out 0s;
	opacity: 0;
	display: block;
	visibility: hidden;
	z-index: 999;
	margin: 0;
	padding: 0;
	list-style: none;
}
	
</style>